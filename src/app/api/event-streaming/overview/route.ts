import { NextResponse } from "next/server";
import { EnterpriseEventEngine } from "@/lib/event-streaming/enterprise-event-engine";

export async function GET() {
  const overview = await EnterpriseEventEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, overview });
}
