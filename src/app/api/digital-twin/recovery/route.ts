import { NextResponse } from "next/server";
import { RecoveryEngine } from "@/lib/digital-twin/recovery-engine";

export async function GET() {
  const recoveries = await RecoveryEngine.getRecoveries("ws-1");
  return NextResponse.json({ success: true, recoveries });
}
