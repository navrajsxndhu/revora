import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { triggerRollback } from "@/lib/integrations/vercel";
import { broadcastEvent } from "@/lib/events/emitter";

export async function POST(request, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  try {
    const incident = await prisma.incident.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!incident || !incident.deploymentId) {
      return NextResponse.json({ error: "Invalid incident or missing deployment ID" }, { status: 400 });
    }

    // Trigger real Vercel rollback
    const result = await triggerRollback(incident.deploymentId);

    // Document in the incident notes
    await prisma.incidentNote.create({
      data: {
        incidentId: incident.id,
        authorId: "operator@revora.com",
        message: `Triggered Vercel rollback via API. New Deployment ID: ${result.id}`,
      }
    });

    broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id });

    return NextResponse.json({ success: true, rollbackId: result.id });
  } catch {
    console.error("Rollback failed:", error);
    return NextResponse.json({ error: "Failed to execute rollback" }, { status: 500 });
  }
}
