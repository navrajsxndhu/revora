import { NextResponse } from "next/server";
import { StreamIndex } from "@/lib/event-streaming/stream-index";

export async function GET() {
  const index = await StreamIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
