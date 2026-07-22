import { NextRequest, NextResponse } from "next/server";
import { publishFederatedEvent } from "@/lib/network/federation-engine";

export async function POST(req: NextRequest) {
  try {
    const { workspaceId, originRegion, eventType, payload } = await req.json();
    const ev = await publishFederatedEvent(workspaceId, originRegion, eventType, payload);
    return NextResponse.json({ success: true, event: ev });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
