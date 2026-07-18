import { NextResponse } from "next/server";
import { TopologyHealthEngine } from "@/lib/topology/topology-health-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const health = await TopologyHealthEngine.getHealth(workspaceId);
    return NextResponse.json(health);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch topology health" }, { status: 500 });
  }
}
