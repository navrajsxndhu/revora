import { NextResponse } from "next/server";
import { EnterpriseResilienceEngine } from "@/lib/resilience/enterprise-resilience-engine";

export async function GET() {
  const data = await EnterpriseResilienceEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, ...data });
}
