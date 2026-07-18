import { NextResponse } from "next/server";
import { ArchitectureDecisionEngine } from "@/lib/knowledge/architecture-decision-engine";

export async function GET() {
  const architecture = await ArchitectureDecisionEngine.getDecisions("ws-1");
  return NextResponse.json({ success: true, architecture });
}
