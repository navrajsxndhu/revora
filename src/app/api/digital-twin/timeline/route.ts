import { NextResponse } from "next/server";
import { TimelineEngine } from "@/lib/digital-twin/timeline-engine";

export async function GET() {
  const timeline = await TimelineEngine.getTimeline("ws-1");
  return NextResponse.json({ success: true, timeline });
}
