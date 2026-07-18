import { NextResponse } from "next/server";
import { MetricsEngine } from "@/lib/observability/metrics-engine";

export async function GET() {
  const metrics = await MetricsEngine.getMetrics("ws-1");
  return NextResponse.json({ success: true, metrics });
}
