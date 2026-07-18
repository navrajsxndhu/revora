import { NextResponse } from "next/server";
import { PlanningIndex } from "@/lib/planning/planning-index";

export async function GET() {
  const index = await PlanningIndex.getIndex("ws-1");
  return NextResponse.json({ success: true, index });
}
