import { NextResponse } from "next/server";
import { ImpactEngine } from "@/lib/digital-twin/impact-engine";

export async function GET() {
  const impacts = await ImpactEngine.getImpacts("ws-1");
  return NextResponse.json({ success: true, impacts });
}
