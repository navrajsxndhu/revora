import { NextResponse } from "next/server";
import { BlastRadiusEngine } from "@/lib/topology/blast-radius-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const analyses = await BlastRadiusEngine.getAnalyses(workspaceId);
    return NextResponse.json({ analyses });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blast radius" }, { status: 500 });
  }
}
