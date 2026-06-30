import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";
import { appendSlackThreadMessage } from "@/lib/integrations/slack-notifier";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const operatorId = session.user.email;

  const resolvedParams = await params;
  try {
    const { newAssignee, handoffSummary } = await req.json();

    const incident = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: {
        assignedTo: newAssignee,
      }
    });

    const noteMessage = `**Transferred to ${newAssignee}**\n\n*Handoff Summary:*\n${handoffSummary}`;

    await prisma.incidentNote.create({
      data: {
        incidentId: incident.id,
        authorId: operatorId,
        message: noteMessage,
      }
    });

    await prisma.auditLog.create({
      data: {
        executionId: "system",
        eventType: "INCIDENT_TRANSFERRED",
        status: "INFO",
        actor: operatorId,
        message: `Incident transferred to ${newAssignee}`
      }
    });

    if (incident.slackThreadTs) {
      await appendSlackThreadMessage(incident.slackThreadTs, `🔄 Incident transferred to ${newAssignee} by ${operatorId}`);
    }

    broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: incident.state });

    return NextResponse.json({ success: true, incident });
  } catch (error) {
    return NextResponse.json({ error: "Failed to transfer incident" }, { status: 500 });
  }
}
