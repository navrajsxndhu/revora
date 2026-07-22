import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { RUNBOOKS } from "@/lib/incidents/runbooks";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const operatorId = session.user.email;
  const resolvedParams = await params;

  try {
    const { stepId } = await request.json();

    const incident = await prisma.incident.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!incident || !incident.activeRunbookId) {
      return NextResponse.json({ error: "No active runbook found." }, { status: 400 });
    }

    const runbook = RUNBOOKS[incident.activeRunbookId];
    if (!runbook) {
      return NextResponse.json({ error: "Invalid runbook reference." }, { status: 400 });
    }

    const step = runbook.steps.find(s => s.id === stepId);
    if (!step) {
      return NextResponse.json({ error: "Step not found in runbook." }, { status: 400 });
    }

    let completedSteps: string[] = JSON.parse(incident.completedRunbookSteps || "[]");
    if (completedSteps.includes(stepId)) {
      return NextResponse.json({ error: "Step already completed." }, { status: 400 });
    }

    // Mock Step Execution Logic
    let success = true;
    let resultMessage = `${step.label} completed successfully.`;

    if (step.actionType === "TRIGGER_REDEPLOY") {
      if (Math.random() > 0.8) {
        success = false;
        resultMessage = "Vercel API timeout. Redeploy failed.";
      }
    }

    // Log the step action
    await prisma.auditLog.create({
      data: {
        workspaceId: "system",
        executionId: "system",
        eventType: "RUNBOOK_STEP_EXECUTED",
        status: success ? "SUCCESS" : "ERROR",
        actor: operatorId,
        message: `Runbook Step ${stepId} on incident ${incident.id}: ${resultMessage}`
      }
    });

    await prisma.incidentNote.create({
      data: {
        incidentId: incident.id,
        authorId: "System",
        message: `**Runbook Step Executed: ${step.label}**\nTriggered by: ${operatorId}\nStatus: ${success ? "SUCCESS" : "FAILED"}\nOutcome: ${resultMessage}`,
      }
    });

    if (success) {
      completedSteps.push(stepId);
      await prisma.incident.update({
        where: { id: incident.id },
        data: {
          completedRunbookSteps: JSON.stringify(completedSteps)
        }
      });
    }

    broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: incident.state });

    if (!success) {
      return NextResponse.json({ error: resultMessage }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: resultMessage });
  } catch (error) {
    return NextResponse.json({ error: "Failed to execute runbook step" }, { status: 500 });
  }
}
