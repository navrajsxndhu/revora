import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastEvent } from "@/lib/events/emitter";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const operatorId = session.user.email;

  const resolvedParams = await params;
  try {
    const { message } = await req.json();

    const note = await prisma.incidentNote.create({
      data: {
        incidentId: resolvedParams.id,
        authorId: operatorId,
        message,
      }
    });

    broadcastEvent("INCIDENT_UPDATED", { incidentId: resolvedParams.id });

    return NextResponse.json({ success: true, note });
  } catch {
    return NextResponse.json({ error: "Failed to add note" }, { status: 500 });
  }
}
