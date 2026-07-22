import { NextResponse } from "next/server";
import { IntelligenceIndex } from "@/lib/intelligence/intelligence-index";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const index = await IntelligenceIndex.getIndex(workspaceId);
    return NextResponse.json(index);
  } catch {
    return NextResponse.json({ error: "Failed to fetch intelligence index" }, { status: 500 });
  }
}
