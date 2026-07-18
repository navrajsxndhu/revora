import { NextResponse } from "next/server";
import { CapacityEngine } from "@/lib/planning/capacity-engine";

export async function GET() {
  const capacities = await CapacityEngine.getCapacities("ws-1");
  return NextResponse.json({ success: true, capacities });
}
