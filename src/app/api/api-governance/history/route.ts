import { NextResponse } from "next/server";
import { ApiLedger } from "@/lib/api-governance/api-ledger";

export async function GET() {
  const history = await ApiLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
