import { NextResponse } from "next/server";
import { LineageEngine } from "@/lib/data-governance/lineage-engine";

export async function GET() {
  const lineage = await LineageEngine.getLineage("ws-1");
  return NextResponse.json({ success: true, lineage });
}
