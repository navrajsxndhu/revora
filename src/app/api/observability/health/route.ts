import { NextResponse } from "next/server";
import { HealthEngine } from "@/lib/observability/health-engine";

export async function GET() {
  const health = await HealthEngine.getIndicators("ws-1");
  return NextResponse.json({ success: true, health });
}
