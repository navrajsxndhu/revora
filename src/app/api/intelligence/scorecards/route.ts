import { NextResponse } from "next/server";
import { ScorecardEngine } from "@/lib/intelligence/scorecard-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const scorecards = await ScorecardEngine.getScorecards(workspaceId);
    return NextResponse.json({ scorecards });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch scorecards" }, { status: 500 });
  }
}
