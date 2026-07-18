import { NextResponse } from "next/server";
import { ApiIndex } from "@/lib/api-governance/api-index";

export async function GET() {
  const index = await ApiIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
