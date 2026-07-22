import { NextRequest, NextResponse } from "next/server";
import { executeReliabilitySimulation } from "@/lib/os/simulation-engine";

export async function POST(req: NextRequest) {
  try {
    const { workspaceId, serviceName, simulatedRisk, recommendation } = await req.json();
    const sim = await executeReliabilitySimulation(workspaceId, serviceName, simulatedRisk, recommendation);
    return NextResponse.json({ success: true, simulation: sim });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
