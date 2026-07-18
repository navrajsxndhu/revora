import { NextResponse } from "next/server";
import { KnowledgeGapEngine } from "@/lib/knowledge/knowledge-gap-engine";

export async function GET() {
  const gaps = await KnowledgeGapEngine.getGaps("ws-1");
  return NextResponse.json({ success: true, gaps });
}
