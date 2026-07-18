import { NextResponse } from "next/server";
import { EnterpriseDataGovernanceEngine } from "@/lib/data-governance/enterprise-data-governance-engine";

export async function GET() {
  const overview = await EnterpriseDataGovernanceEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, overview });
}
