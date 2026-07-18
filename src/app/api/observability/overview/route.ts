import { NextResponse } from "next/server";
import { EnterpriseObservabilityEngine } from "@/lib/observability/enterprise-observability-engine";

export async function GET() {
  const overview = await EnterpriseObservabilityEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, overview });
}
