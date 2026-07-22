import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const initiatives = await prisma.strategicInitiative.findMany({ where: { workspaceId } });
    return NextResponse.json({ initiatives });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch initiatives" }, { status: 500 });
  }
}
