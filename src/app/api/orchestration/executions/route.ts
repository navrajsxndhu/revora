import { NextResponse } from "next/server";
import { ExecutionEngine } from "@/lib/orchestration/execution-engine";

export async function GET() {
  const executions = await ExecutionEngine.getExecutions("ws-1");
  return NextResponse.json({ success: true, executions });
}
