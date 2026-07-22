import { NextResponse } from "next/server";
import { executeReliabilitySimulation } from "@/lib/os/simulation-engine";

export async function POST() {
  try {
    const { workspaceId, serviceName, simulatedRisk, recommendation } = await req.json();
    const sim = await executeReliabilitySimulation(workspaceId, serviceName, simulatedRisk, recommendation);
    return NextResponse.json({ success: true, simulation: sim });
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
