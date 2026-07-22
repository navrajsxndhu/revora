import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const nodes = await prisma.topologyNode.findMany({ where: { workspaceId } });
    const edges = await prisma.topologyEdge.findMany({ where: { workspaceId } });
    return NextResponse.json({ nodes, edges });
  } catch {
    return NextResponse.json({ error: "Failed to fetch topology" }, { status: 500 });
  }
}
