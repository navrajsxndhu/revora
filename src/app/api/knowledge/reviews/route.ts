import { NextResponse } from "next/server";
import { KnowledgeReviewEngine } from "@/lib/knowledge/knowledge-review-engine";

export async function GET() {
  const reviews = await KnowledgeReviewEngine.getReviews("ws-1");
  return NextResponse.json({ success: true, reviews });
}
