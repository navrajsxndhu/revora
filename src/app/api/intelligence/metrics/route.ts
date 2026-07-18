import { NextResponse } from "next/server";
import { OperationalMetricsEngine } from "@/lib/intelligence/operational-metrics-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const metrics = await OperationalMetricsEngine.getMetrics(workspaceId);
    return NextResponse.json({ metrics });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch metrics" }, { status: 500 });
  }
}
