import { NextResponse } from "next/server";
import { QualityEngine } from "@/lib/data-governance/quality-engine";

export async function GET() {
  const quality = await QualityEngine.getQualityRules("ws-1");
  return NextResponse.json({ success: true, quality });
}
