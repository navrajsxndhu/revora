import { NextResponse } from "next/server";
import { BusinessImpactEngine } from "@/lib/resilience/business-impact-engine";

export async function GET() {
  const analysis = await BusinessImpactEngine.getAnalysis("ws-1");
  return NextResponse.json({ success: true, analysis });
}
