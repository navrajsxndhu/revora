import { NextResponse } from "next/server";
import { KnowledgeEngine } from "@/lib/knowledge/knowledge-engine";

export async function GET() {
  const categories = await KnowledgeEngine.getCategories("ws-1");
  return NextResponse.json({ success: true, categories });
}
