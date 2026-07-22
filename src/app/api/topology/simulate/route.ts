import { NextResponse } from "next/server";
import { TopologySimulator } from "@/lib/topology/topology-simulator";

export async function POST(request: Request) {
  try {
    const workspaceId = "ws-123";
    const { action, targetId } = await request.json();
    const result = await TopologySimulator.simulate(workspaceId, action, targetId);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error: "Failed to run topology simulation" }, { status: 500 });
  }
}
