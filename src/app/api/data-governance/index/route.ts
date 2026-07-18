import { NextResponse } from "next/server";
import { MetadataIndex } from "@/lib/data-governance/metadata-index";

export async function GET() {
  const index = await MetadataIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
