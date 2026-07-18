import { NextResponse } from "next/server";
import { KnowledgeEngine } from "@/lib/knowledge/knowledge-engine";

export async function GET() {
  const articles = await KnowledgeEngine.getArticles("ws-1");
  return NextResponse.json({ success: true, articles });
}
