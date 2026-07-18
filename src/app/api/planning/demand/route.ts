import { NextResponse } from "next/server";
import { DemandEngine } from "@/lib/planning/demand-engine";

export async function GET() {
  const requests = await DemandEngine.getRequests("ws-1");
  return NextResponse.json({ success: true, requests });
}
