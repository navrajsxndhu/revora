import { NextResponse } from "next/server";
import { MasterDataEngine } from "@/lib/data-governance/master-data-engine";

export async function GET() {
  const masterData = await MasterDataEngine.getEntities("ws-1");
  return NextResponse.json({ success: true, masterData });
}
