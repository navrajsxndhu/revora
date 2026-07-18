import { NextResponse } from "next/server";
import { MetadataEngine } from "@/lib/data-governance/metadata-engine";

export async function GET() {
  const catalog = await MetadataEngine.getCatalog("ws-1");
  return NextResponse.json({ success: true, catalog });
}
