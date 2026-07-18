import { NextResponse } from "next/server";
import { ContinuityLedger } from "@/lib/resilience/continuity-ledger";

export async function GET() {
  const history = await ContinuityLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
