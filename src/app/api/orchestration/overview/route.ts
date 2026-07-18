import { NextResponse } from "next/server";
import { EnterpriseOrchestrator } from "@/lib/orchestration/enterprise-orchestrator";

export async function GET() {
  const data = await EnterpriseOrchestrator.getOverview("ws-1");
  return NextResponse.json({ success: true, ...data });
}
