import { NextResponse } from "next/server";
import { DecisionMemoryEngine } from "@/lib/knowledge/decision-memory-engine";

export async function GET() {
  const decisions = await DecisionMemoryEngine.getDecisions("ws-1");
  return NextResponse.json({ success: true, decisions });
}
