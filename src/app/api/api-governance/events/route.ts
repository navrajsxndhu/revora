import { NextResponse } from "next/server";
import { EventChannelEngine } from "@/lib/api-governance/event-channel-engine";

export async function GET() {
  const events = await EventChannelEngine.getChannels("ws-1");
  return NextResponse.json({ success: true, events });
}
