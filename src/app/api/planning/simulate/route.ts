import { NextRequest, NextResponse } from "next/server";
import { PlanningSimulator } from "@/lib/planning/planning-simulator";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await PlanningSimulator.simulate("ws-1", body.scenario);
  return NextResponse.json({ success: true, result });
}
