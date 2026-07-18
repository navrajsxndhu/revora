import { NextResponse } from "next/server";
import { IntelligenceSimulator } from "@/lib/intelligence/intelligence-simulator";

export async function POST(request: Request) {
  try {
    const workspaceId = "ws-123";
    const { action, targetId } = await request.json();
    const result = await IntelligenceSimulator.simulate(workspaceId, action, targetId);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error: "Failed to simulate intelligence" }, { status: 500 });
  }
}
