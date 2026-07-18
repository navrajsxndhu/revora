import { NextResponse } from "next/server";
import { EnterpriseDigitalTwinEngine } from "@/lib/digital-twin/enterprise-digital-twin-engine";

export async function GET() {
  const data = await EnterpriseDigitalTwinEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, ...data });
}
