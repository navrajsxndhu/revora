import { NextResponse } from "next/server";
import { IntegrationEngine } from "@/lib/api-governance/integration-engine";

export async function GET() {
  const integrations = await IntegrationEngine.getIntegrations("ws-1");
  return NextResponse.json({ success: true, integrations });
}
