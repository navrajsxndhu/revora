import { NextResponse } from "next/server";
import { ExecutiveBriefingEngine } from "@/lib/intelligence/executive-briefing-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const briefings = await ExecutiveBriefingEngine.getBriefings(workspaceId);
    return NextResponse.json({ briefings });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch briefings" }, { status: 500 });
  }
}
