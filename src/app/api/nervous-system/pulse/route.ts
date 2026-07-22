import { NextResponse } from "next/server";
import { recordPulse } from "@/lib/nervous-system/pulse-stream";

export async function POST() {
  try {
    const { workspaceId, region, latencyMs, activeQueues, federationLagMs } = await req.json();
    const pulse = await recordPulse(workspaceId, region, latencyMs, activeQueues, federationLagMs);
    return NextResponse.json({ success: true, pulse });
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
