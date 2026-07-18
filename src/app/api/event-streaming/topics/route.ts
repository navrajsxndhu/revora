import { NextResponse } from "next/server";
import { TopicEngine } from "@/lib/event-streaming/topic-engine";

export async function GET() {
  const topics = await TopicEngine.getTopics("ws-1");
  return NextResponse.json({ success: true, topics });
}
