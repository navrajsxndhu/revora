import { NextResponse } from "next/server";
import { IdentityRiskEngine } from "@/lib/identity/identity-risk-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const risks = await IdentityRiskEngine.getRisks(workspaceId);
    return NextResponse.json({ risks });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch risks" }, { status: 500 });
  }
}
