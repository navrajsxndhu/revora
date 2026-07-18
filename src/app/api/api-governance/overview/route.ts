import { NextResponse } from "next/server";
import { EnterpriseApiEngine } from "@/lib/api-governance/enterprise-api-engine";

export async function GET() {
  const overview = await EnterpriseApiEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, overview });
}
