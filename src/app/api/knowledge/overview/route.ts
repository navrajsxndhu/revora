import { NextResponse } from "next/server";
import { EnterpriseKnowledgeEngine } from "@/lib/knowledge/enterprise-knowledge-engine";

export async function GET() {
  const overview = await EnterpriseKnowledgeEngine.getOverview("ws-1");
  return NextResponse.json({ success: true, overview });
}
