import { NextResponse } from "next/server";
import { ExecutiveKPIEngine } from "@/lib/intelligence/executive-kpi-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const kpis = await ExecutiveKPIEngine.getKPIs(workspaceId);
    return NextResponse.json({ kpis });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch kpis" }, { status: 500 });
  }
}
