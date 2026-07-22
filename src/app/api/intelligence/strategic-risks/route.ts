import { NextResponse } from "next/server";
import { StrategicRiskEngine } from "@/lib/intelligence/strategic-risk-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const risks = await StrategicRiskEngine.getRisks(workspaceId);
    return NextResponse.json({ risks });
  } catch {
    return NextResponse.json({ error: "Failed to fetch strategic risks" }, { status: 500 });
  }
}
