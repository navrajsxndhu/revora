import { NextResponse } from "next/server";
import { ExecutionLedger } from "@/lib/orchestration/execution-ledger";

export async function GET() {
  const history = await ExecutionLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
