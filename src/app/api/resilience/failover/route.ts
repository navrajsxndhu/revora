import { NextResponse } from "next/server";
import { FailoverEngine } from "@/lib/resilience/failover-engine";

export async function GET() {
  const executions = await FailoverEngine.getExecutions("ws-1");
  return NextResponse.json({ success: true, executions });
}
