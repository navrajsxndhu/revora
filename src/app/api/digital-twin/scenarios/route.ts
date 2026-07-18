import { NextResponse } from "next/server";
import { ScenarioEngine } from "@/lib/digital-twin/scenario-engine";

export async function GET() {
  const scenarios = await ScenarioEngine.getScenarios("ws-1");
  return NextResponse.json({ success: true, scenarios });
}
