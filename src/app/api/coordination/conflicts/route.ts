import { NextRequest, NextResponse } from "next/server";
import { detectAndResolveConflicts } from "@/lib/coordination/conflict-resolution";
import { buildCoordinationGraph } from "@/lib/coordination/coordination-graph";
import { coordinateResources } from "@/lib/coordination/resource-coordination";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { nodes, edges } = buildCoordinationGraph();
    const resources = coordinateResources();
    const conflicts = detectAndResolveConflicts(nodes, edges, resources);
    return NextResponse.json(conflicts);
  } catch {
    console.error("Error resolving conflicts:", error);
    return NextResponse.json({ error: "Failed to resolve conflicts" }, { status: 500 });
  }
}
