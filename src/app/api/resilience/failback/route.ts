import { NextResponse } from "next/server";
import { FailbackEngine } from "@/lib/resilience/failback-engine";

export async function GET() {
  const plans = await FailbackEngine.getPlans("ws-1");
  return NextResponse.json({ success: true, plans });
}
