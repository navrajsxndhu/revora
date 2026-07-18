import { NextResponse } from "next/server";
import { UtilizationEngine } from "@/lib/planning/utilization-engine";

export async function GET() {
  const utilization = await UtilizationEngine.getUtilization("ws-1");
  return NextResponse.json({ success: true, utilization });
}
