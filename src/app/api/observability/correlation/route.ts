import { NextResponse } from "next/server";
import { CorrelationEngine } from "@/lib/observability/correlation-engine";

export async function GET() {
  const correlation = await CorrelationEngine.getCorrelations("ws-1");
  return NextResponse.json({ success: true, correlation });
}
