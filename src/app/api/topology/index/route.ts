import { NextResponse } from "next/server";
import { TopologyIndex } from "@/lib/topology/topology-index";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const index = await TopologyIndex.getIndex(workspaceId);
    return NextResponse.json(index);
  } catch {
    return NextResponse.json({ error: "Failed to fetch topology index" }, { status: 500 });
  }
}
