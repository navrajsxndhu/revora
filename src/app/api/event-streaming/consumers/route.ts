import { NextResponse } from "next/server";
import { ConsumerEngine } from "@/lib/event-streaming/consumer-engine";

export async function GET() {
  const consumers = await ConsumerEngine.getConsumers("ws-1");
  return NextResponse.json({ success: true, consumers });
}
