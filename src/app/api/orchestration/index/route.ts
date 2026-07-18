import { NextResponse } from "next/server";
import { ExecutionIndex } from "@/lib/orchestration/execution-index";

export async function GET() {
  const index = await ExecutionIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
