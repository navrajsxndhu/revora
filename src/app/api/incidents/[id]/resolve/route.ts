import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { appendSlackThreadMessage } from "@/lib/integrations/slack-notifier";
import { broadcastEvent } from "@/lib/events/emitter";
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
    const { rootCause, mitigation, nextSteps } = await req.json();

    if (!rootCause || !mitigation) {
      return NextResponse.json({ error: "Missing required resolution summary fields." }, { status: 400 });
    }

    const resolutionMarkdown = `**Resolved by ${operatorId}**\n\n**Root Cause:**\n${rootCause}\n\n**Mitigation:**\n${mitigation}\n\n**Future Notes:**\n${nextSteps || "None"}`;

    const updated = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: {
        state: "RESOLVED",
        resolvedAt: new Date(),
        resolutionNotes: resolutionMarkdown,
      }
    });

    await prisma.incidentNote.create({
      data: {
        incidentId: updated.id,
        authorId: operatorId,
        message: resolutionMarkdown,
      }
    });

    await prisma.auditLog.create({
      data: {
        executionId: "system",
        eventType: "INCIDENT_RESOLVED",
        status: "SUCCESS",
        actor: operatorId,
        message: `Incident resolved`
      }
    });

    if (updated.slackThreadTs) {
      await appendSlackThreadMessage(updated.slackThreadTs, `✅ *Incident Resolved* by ${operatorId}.`);
    }

    broadcastEvent("INCIDENT_UPDATED", { incidentId: updated.id, state: "RESOLVED" });

    return NextResponse.json({ success: true, incident: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to resolve incident" }, { status: 500 });
  }
}
