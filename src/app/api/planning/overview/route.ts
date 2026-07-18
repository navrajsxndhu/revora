import { NextResponse } from "next/server";
import { EnterpriseCapacityEngine } from "@/lib/planning/enterprise-capacity-engine";

export async function GET() {
  const data = await EnterpriseCapacityEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, ...data });
}
