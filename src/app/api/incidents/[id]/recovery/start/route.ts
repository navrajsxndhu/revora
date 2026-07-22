import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { generateRecoveryPlan } from "@/lib/incidents/recovery-plan";

const COOLDOWN_SECONDS = 60;

export async function POST(, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const operatorId = session.user.email;
  const resolvedParams = await params;

  try {
    const incident = await prisma.incident.findUnique({
      where: { id: resolvedParams.id },
      include: {
        symptomIncidents: true
      }
    });

    if (!incident) {
      return NextResponse.json({ error: "Incident not found" }, { status: 404 });
    }

    if (incident.state !== "RESOLVED") {
      return NextResponse.json({ error: "Cannot start recovery. Root cause must be RESOLVED first." }, { status: 400 });
    }

    if (incident.recoveryStatus === "IN_PROGRESS") {
      return NextResponse.json({ error: "Recovery is already in progress." }, { status: 400 });
    }

    // Cooldown check for RECOVERY_STARTED
    const recentAudit = await prisma.auditLog.findFirst({
      where: {
        eventType: "RECOVERY_STARTED",
        message: { contains: incident.id }
      },
      orderBy: { createdAt: 'desc' }
    });

    if (recentAudit) {
      const secondsSince = (new Date().getTime() - recentAudit.createdAt.getTime()) / 1000;
      if (secondsSince < COOLDOWN_SECONDS) {
        return NextResponse.json({ error: `Cooldown active. Please wait ${Math.ceil(COOLDOWN_SECONDS - secondsSince)}s.` }, { status: 429 });
      }
    }

    const symptomServices = incident.symptomIncidents
      .map(s => s.serviceAffected)
      .filter((s): s is string => s !== null);

    const plan = generateRecoveryPlan(incident.serviceAffected, symptomServices);

    if (plan.recommendedActions.length === 0) {
      return NextResponse.json({ error: "No downstream services require recovery." }, { status: 400 });
    }

    // Set recovery state to IN_PROGRESS
    await prisma.incident.update({
      where: { id: incident.id },
      data: {
        recoveryStatus: "IN_PROGRESS",
        recoveryStartedAt: new Date()
      }
    });

    await prisma.auditLog.create({
      data: {
        workspaceId: "system",
        executionId: "system",
        eventType: "RECOVERY_STARTED",
        status: "INFO",
        actor: operatorId,
        message: `Recovery started for incident ${incident.id}`
      }
    });
    
    broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: incident.state });

    // Execute Recovery Chain sequentially
    const executeRecoveryChain = async () => {
      let anyFailures = false;

      for (const action of plan.recommendedActions) {
        // Sleep for 2 seconds to simulate async operation
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        let success = true;
        let resultMessage = "";

        // Simulate remediation actions deterministically
        if (action.action === "REPLAY_WORKFLOW") {
          resultMessage = `Replayed workflow for ${action.service} successfully.`;
        } else if (action.action === "TRIGGER_REDEPLOY") {
          if (Math.random() > 0.9) {
            success = false;
            resultMessage = `Failed to trigger redeploy for ${action.service}. API timeout.`;
            anyFailures = true;
          } else {
            resultMessage = `Redeploy triggered for ${action.service}.`;
          }
        } else if (action.action === "RETRY_SLACK") {
          resultMessage = `Retried Slack notification for ${action.service}.`;
        } else {
          resultMessage = `Executed ${action.action} on ${action.service}.`;
        }

        await prisma.auditLog.create({
          data: {
            workspaceId: "system",
            executionId: "system",
            eventType: success ? "RECOVERY_STEP_COMPLETED" : "RECOVERY_STEP_FAILED",
            status: success ? "SUCCESS" : "ERROR",
            actor: operatorId,
            message: `[${action.service}] ${resultMessage} (Root: ${incident.id})`
          }
        });
        broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: incident.state });

        if (!success) {
          // If sequential execution fails, we stop the chain to prevent chaos
          break;
        }
      }

      await prisma.incident.update({
        where: { id: incident.id },
        data: {
          recoveryStatus: unknownFailures ? "FAILED" : "COMPLETED", // Using string for status, even if schema doesn't restrict
          recoveryCompletedAt: new Date()
        }
      });

      await prisma.auditLog.create({
        data: {
          workspaceId: "system",
          executionId: "system",
          eventType: "RECOVERY_COMPLETED",
          status: unknownFailures ? "ERROR" : "SUCCESS",
          actor: operatorId,
          message: `Recovery ${anyFailures ? 'failed' : 'completed successfully'} for incident ${incident.id}`
        }
      });
      broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: incident.state });
    };

    // Fire and forget the recovery chain to avoid blocking the HTTP response
    executeRecoveryChain();

    return NextResponse.json({ success: true, message: "Recovery chain started." });
  } catch {
    return NextResponse.json({ error: "Failed to start recovery" }, { status: 500 });
  }
}
