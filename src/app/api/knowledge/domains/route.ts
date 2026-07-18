import { NextResponse } from "next/server";
import { KnowledgeEngine } from "@/lib/knowledge/knowledge-engine";

export async function GET() {
  const domains = await KnowledgeEngine.getDomains("ws-1");
  return NextResponse.json({ success: true, domains });
}
