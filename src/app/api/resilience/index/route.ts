import { NextResponse } from "next/server";
import { ResilienceIndex } from "@/lib/resilience/resilience-index";

export async function GET() {
  const index = await ResilienceIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
