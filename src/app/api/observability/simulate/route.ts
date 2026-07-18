import { NextResponse } from "next/server";
import { TelemetrySimulator } from "@/lib/observability/telemetry-simulator";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await TelemetrySimulator.simulate("ws-1", body.scenario);
  return NextResponse.json({ success: true, result });
}
