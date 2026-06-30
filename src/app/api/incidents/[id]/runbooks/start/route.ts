import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { RUNBOOKS } from "@/lib/incidents/runbooks";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const operatorId = session.user.email;
  const resolvedParams = await params;

  try {
    const { runbookId } = await req.json();

    if (!RUNBOOKS[runbookId]) {
      return NextResponse.json({ error: "Invalid runbook ID." }, { status: 400 });
    }

    const incident = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: {
        activeRunbookId: runbookId,
        completedRunbookSteps: "[]" // reset steps
      }
    });

    await prisma.incidentNote.create({
      data: {
        incidentId: incident.id,
        authorId: "System",
        message: `**Runbook Started:** ${RUNBOOKS[runbookId].title}\nStarted by: ${operatorId}`,
      }
    });

    await prisma.auditLog.create({
      data: {
        workspaceId: "system",
        executionId: "system",
        eventType: "RUNBOOK_STARTED",
        status: "INFO",
        actor: operatorId,
        message: `Started runbook ${runbookId} on incident ${incident.id}`
      }
    });

    broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: incident.state });

    return NextResponse.json({ success: true, incident });
  } catch (error) {
    return NextResponse.json({ error: "Failed to start runbook" }, { status: 500 });
  }
}
