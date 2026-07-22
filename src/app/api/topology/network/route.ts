import { NextResponse } from "next/server";
import { NetworkEngine } from "@/lib/topology/network-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const zones = await NetworkEngine.getZones(workspaceId);
    return NextResponse.json({ zones });
  } catch {
    return NextResponse.json({ error: "Failed to fetch network zones" }, { status: 500 });
  }
}
