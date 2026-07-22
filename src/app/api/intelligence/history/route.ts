import { NextResponse } from "next/server";
import { IntelligenceDecisionLedger } from "@/lib/intelligence/decision-ledger";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const history = await IntelligenceDecisionLedger.getLedger(workspaceId);
    return NextResponse.json({ history });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch decision history" }, { status: 500 });
  }
}
