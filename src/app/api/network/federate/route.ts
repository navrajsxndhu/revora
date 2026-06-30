import { NextResponse } from "next/server";
import { publishFederatedEvent } from "@/lib/network/federation-engine";

export async function POST(req: Request) {
  try {
    const { workspaceId, originRegion, eventType, payload } = await req.json();
    const ev = await publishFederatedEvent(workspaceId, originRegion, eventType, payload);
    return NextResponse.json({ success: true, event: ev });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
