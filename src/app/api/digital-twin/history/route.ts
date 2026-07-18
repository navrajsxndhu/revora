import { NextResponse } from "next/server";
import { DigitalTwinLedgerEngine } from "@/lib/digital-twin/digital-twin-ledger";

export async function GET() {
  const history = await DigitalTwinLedgerEngine.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
