import { NextResponse } from "next/server";
import { BusinessContinuityEngine } from "@/lib/resilience/business-continuity-engine";

export async function GET() {
  const plans = await BusinessContinuityEngine.getPlans("ws-1");
  return NextResponse.json({ success: true, plans });
}
