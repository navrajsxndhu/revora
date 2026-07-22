import { NextResponse } from "next/server";
import { AccessReviewEngine } from "@/lib/identity/access-review-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const reviews = await AccessReviewEngine.getReviews(workspaceId);
    return NextResponse.json({ reviews });
  } catch {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
