import { NextResponse } from "next/server";
import { StreamSimulator } from "@/lib/event-streaming/stream-simulator";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await StreamSimulator.simulate("ws-1", body.scenario);
  return NextResponse.json({ success: true, result });
}
