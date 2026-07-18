import { NextResponse } from "next/server";
import { ReadinessEngine } from "@/lib/resilience/readiness-engine";

export async function GET() {
  const readiness = await ReadinessEngine.getReadiness("ws-1");
  return NextResponse.json({ success: true, readiness });
}
