import { NextResponse } from "next/server";
import { BusinessImpactEngine } from "@/lib/intelligence/business-impact-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const impacts = await BusinessImpactEngine.getImpacts(workspaceId);
    return NextResponse.json({ impacts });
  } catch {
    return NextResponse.json({ error: "Failed to fetch business impacts" }, { status: 500 });
  }
}
