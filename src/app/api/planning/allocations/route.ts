import { NextResponse } from "next/server";
import { AllocationEngine } from "@/lib/planning/allocation-engine";

export async function GET() {
  const allocations = await AllocationEngine.getAllocations("ws-1");
  return NextResponse.json({ success: true, allocations });
}
