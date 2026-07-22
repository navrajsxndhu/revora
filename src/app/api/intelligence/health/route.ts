import { NextResponse } from "next/server";
import { HealthEngine } from "@/lib/intelligence/health-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const health = await HealthEngine.getHealth(workspaceId);
    return NextResponse.json({ health });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch health" }, { status: 500 });
  }
}
