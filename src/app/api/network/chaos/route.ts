import { NextResponse } from "next/server";
import { runChaosSimulation } from "@/lib/network/chaos-runner";

export async function POST(req: Request) {
  try {
    const { workspaceId, scenario, targetRegion, targetService } = await req.json();
    const sim = await runChaosSimulation(workspaceId, scenario, targetRegion, targetService);
    return NextResponse.json({ success: true, simulation: sim });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
