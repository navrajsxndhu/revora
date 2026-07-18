import { NextResponse } from "next/server";
import { RunbookEngine } from "@/lib/knowledge/runbook-engine";

export async function GET() {
  const runbooks = await RunbookEngine.getRunbooks("ws-1");
  return NextResponse.json({ success: true, runbooks });
}
