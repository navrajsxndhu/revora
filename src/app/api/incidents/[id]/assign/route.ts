import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";
import { appendSlackThreadMessage } from "@/lib/integrations/slack-notifier";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const operatorId = session.user.email;

  const resolvedParams = await params;
  try {
    const incident = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: {
        assignedTo: operatorId,
        state: "ACKNOWLEDGED",
      }
    });

    await prisma.incidentNote.create({
      data: {
        incidentId: incident.id,
        authorId: "System",
        message: `Incident acknowledged and assigned to ${operatorId}`,
      }
    });

    if (incident.slackThreadTs) {
      await appendSlackThreadMessage(incident.slackThreadTs, `👀 Incident acknowledged by ${operatorId}`);
    }

    broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: "ACKNOWLEDGED" });

    return NextResponse.json({ success: true, incident });
  } catch {
    return NextResponse.json({ error: "Failed to assign incident" }, { status: 500 });
  }
}
