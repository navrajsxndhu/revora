import { NextRequest, NextResponse } from "next/server";
import { ResilienceSimulator } from "@/lib/resilience/resilience-simulator";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await ResilienceSimulator.simulate("ws-1", body.action, body.targetId);
  return NextResponse.json({ success: true, result });
}
