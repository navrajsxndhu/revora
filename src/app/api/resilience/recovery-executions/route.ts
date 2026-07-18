import { NextResponse } from "next/server";
import { RecoveryEngine } from "@/lib/resilience/recovery-engine";

export async function GET() {
  const executions = await RecoveryEngine.getExecutions("ws-1");
  return NextResponse.json({ success: true, executions });
}
