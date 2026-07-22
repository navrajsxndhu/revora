import { NextResponse } from "next/server";
import { EnterpriseIntelligenceEngine } from "@/lib/intelligence/enterprise-intelligence-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const overview = await EnterpriseIntelligenceEngine.getOverview(workspaceId);
    return NextResponse.json(overview);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch overview" }, { status: 500 });
  }
}
