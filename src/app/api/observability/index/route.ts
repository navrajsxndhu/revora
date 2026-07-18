import { NextResponse } from "next/server";
import { TelemetryIndex } from "@/lib/observability/telemetry-index";

export async function GET() {
  const index = await TelemetryIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
