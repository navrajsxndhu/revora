import { NextResponse } from "next/server";
import { PlanningLedger } from "@/lib/planning/planning-ledger";

export async function GET() {
  const history = await PlanningLedger.getLedger("ws-1");
  return NextResponse.json({ success: true, history });
}
