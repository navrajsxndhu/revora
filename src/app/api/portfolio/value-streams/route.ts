import { NextResponse } from "next/server";
import { ValueStreamEngine } from "@/lib/portfolio/value-stream-engine";

export async function GET() {
  const valueStreams = await ValueStreamEngine.getValueStreams("ws-1");
  return NextResponse.json({ success: true, valueStreams });
}
