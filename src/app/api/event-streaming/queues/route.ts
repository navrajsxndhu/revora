import { NextResponse } from "next/server";
import { QueueEngine } from "@/lib/event-streaming/queue-engine";

export async function GET() {
  const queues = await QueueEngine.getQueues("ws-1");
  return NextResponse.json({ success: true, queues });
}
