import { NextResponse } from "next/server";
import { ClassificationEngine } from "@/lib/data-governance/classification-engine";

export async function GET() {
  const classifications = await ClassificationEngine.getClassifications("ws-1");
  return NextResponse.json({ success: true, classifications });
}
