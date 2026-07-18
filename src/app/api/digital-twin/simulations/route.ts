import { NextResponse } from "next/server";
import { SimulationEngine } from "@/lib/digital-twin/simulation-engine";

export async function GET() {
  const simulations = await SimulationEngine.getSimulations("ws-1");
  return NextResponse.json({ success: true, simulations });
}
