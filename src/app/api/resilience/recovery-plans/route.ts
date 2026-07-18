import { NextResponse } from "next/server";
import { RecoveryEngine } from "@/lib/resilience/recovery-engine";

export async function GET() {
  const plans = await RecoveryEngine.getPlans("ws-1");
  return NextResponse.json({ success: true, plans });
}
