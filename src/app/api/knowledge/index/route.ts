import { NextResponse } from "next/server";
import { KnowledgeIndex } from "@/lib/knowledge/knowledge-index";

export async function GET() {
  const index = await KnowledgeIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
