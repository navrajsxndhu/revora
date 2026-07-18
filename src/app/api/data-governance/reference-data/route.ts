import { NextResponse } from "next/server";
import { ReferenceDataEngine } from "@/lib/data-governance/reference-data-engine";

export async function GET() {
  const referenceData = await ReferenceDataEngine.getEntities("ws-1");
  return NextResponse.json({ success: true, referenceData });
}
