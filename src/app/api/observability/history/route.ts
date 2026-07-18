import { NextResponse } from "next/server";
import { TelemetryLedger } from "@/lib/observability/telemetry-ledger";

export async function GET() {
  const history = await TelemetryLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
