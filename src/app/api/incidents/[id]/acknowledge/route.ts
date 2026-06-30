import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  try {
    const updated = await prisma.incident.update({
      where: { id: resolvedParams.id },
      data: {
        state: "ACKNOWLEDGED",
        acknowledgedAt: new Date(),
        acknowledgedBy: "operator@revora.com", // Normally from NextAuth session
      }
    });

    broadcastEvent("INCIDENT_UPDATED", { incidentId: updated.id, state: "ACKNOWLEDGED" });

    return NextResponse.json({ success: true, incident: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to acknowledge incident" }, { status: 500 });
  }
}
