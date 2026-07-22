import { NextResponse } from "next/server";
import { CorrelationEngine } from "@/lib/intelligence/correlation-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const correlations = await CorrelationEngine.getCorrelations(workspaceId);
    return NextResponse.json({ correlations });
  } catch {
    return NextResponse.json({ error: "Failed to fetch correlations" }, { status: 500 });
  }
}
