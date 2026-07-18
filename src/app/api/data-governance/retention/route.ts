import { NextResponse } from "next/server";
import { RetentionEngine } from "@/lib/data-governance/retention-engine";

export async function GET() {
  const retention = await RetentionEngine.getPolicies("ws-1");
  return NextResponse.json({ success: true, retention });
}
