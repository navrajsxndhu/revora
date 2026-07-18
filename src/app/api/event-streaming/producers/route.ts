import { NextResponse } from "next/server";
import { ProducerEngine } from "@/lib/event-streaming/producer-engine";

export async function GET() {
  const producers = await ProducerEngine.getProducers("ws-1");
  return NextResponse.json({ success: true, producers });
}
