import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";
import { appendSlackThreadMessage } from "@/lib/integrations/slack-notifier";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const VALID_ACTIONS = ["REPLAY_WORKFLOW", "TRIGGER_REDEPLOY", "RETRY_SLACK"];
const COOLDOWN_SECONDS = 60;

export async function POST(, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const operatorId = session.user.email;

  const resolvedParams = await params;
  try {
    const { actionType } = await req.json();

    if (!VALID_ACTIONS.includes(actionType)) {
      return NextResponse.json({ error: "Invalid remediation action." }, { status: 400 });
    }

    const incident = await prisma.incident.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!incident) {
      return NextResponse.json({ error: "Incident not found" }, { status: 404 });
    }

    // Cooldown Enforcement
    const recentAudit = await prisma.auditLog.findFirst({
      where: {
        eventType: `REMEDIATION_${actionType}`,
        message: { contains: incident.id } // Basic link since auditLog executionId might vary or be 'system'
      },
      orderBy: { createdAt: 'desc' }
    });

    if (recentAudit) {
      const secondsSince = (new Date().getTime() - recentAudit.createdAt.getTime()) / 1000;
      if (secondsSince < COOLDOWN_SECONDS) {
        return NextResponse.json({ error: `Cooldown active. Please wait ${Math.ceil(COOLDOWN_SECONDS - secondsSince)}s.` }, { status: 429 });
      }
    }

    // Execute Mock Remediation
    let resultMessage = "";
    let success = true;

    if (actionType === "REPLAY_WORKFLOW") {
      resultMessage = "Replay succeeded after 12s.";
    } else if (actionType === "TRIGGER_REDEPLOY") {
      // Simulate a random failure for realism
      if (Math.random() > 0.8) {
        success = false;
        resultMessage = "Vercel API timeout. Redeploy failed.";
      } else {
        resultMessage = "Redeploy triggered successfully.";
      }
    } else if (actionType === "RETRY_SLACK") {
      resultMessage = "Slack notification retried successfully.";
    }

    // Log the action
    await prisma.incidentNote.create({
      data: {
        incidentId: incident.id,
        authorId: "System",
        message: `**Remediation Action: ${actionType}**\nTriggered by: ${operatorId}\nStatus: ${success ? "SUCCESS" : "FAILED"}\nOutcome: ${resultMessage}`,
      }
    });

    await prisma.auditLog.create({
      data: {
        workspaceId: "system",
        executionId: "system",
        eventType: `REMEDIATION_${actionType}`,
        status: success ? "SUCCESS" : "ERROR",
        actor: operatorId,
        message: `Remediation ${actionType} on incident ${incident.id}: ${resultMessage}`
      }
    });

    if (incident.slackThreadTs) {
      await appendSlackThreadMessage(incident.slackThreadTs, `🔧 Remediation Action: *${actionType}* by ${operatorId}. Status: ${success ? "SUCCESS" : "FAILED"}`);
    }

    broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: incident.state });

    if (!success) {
      return NextResponse.json({ error: resultMessage }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: resultMessage });
  } catch {
    return NextResponse.json({ error: "Failed to execute remediation action" }, { status: 500 });
  }
}
