import { NextResponse } from "next/server";
import { StreamingLedger } from "@/lib/event-streaming/streaming-ledger";

export async function GET() {
  const history = await StreamingLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
