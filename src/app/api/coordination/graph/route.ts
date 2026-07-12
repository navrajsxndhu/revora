import { NextRequest, NextResponse } from "next/server";
import { buildCoordinationGraph } from "@/lib/coordination/coordination-graph";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const graph = buildCoordinationGraph();
    return NextResponse.json(graph);
  } catch (error) {
    console.error("Error building coordination graph:", error);
    return NextResponse.json({ error: "Failed to build graph" }, { status: 500 });
  }
}
