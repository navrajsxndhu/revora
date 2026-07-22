import { NextRequest, NextResponse } from "next/server";
import { runChaosSimulation } from "@/lib/network/chaos-runner";

export async function POST(req: NextRequest) {
  try {
    const { workspaceId, scenario, targetRegion, targetService } = await req.json();
    const sim = await runChaosSimulation(workspaceId, scenario, targetRegion, targetService);
    return NextResponse.json({ success: true, simulation: sim });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
