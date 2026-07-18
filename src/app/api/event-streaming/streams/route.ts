import { NextResponse } from "next/server";
import { StreamEngine } from "@/lib/event-streaming/stream-engine";

export async function GET() {
  const streams = await StreamEngine.getStreams("ws-1");
  return NextResponse.json({ success: true, streams });
}
