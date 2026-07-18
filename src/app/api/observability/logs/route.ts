import { NextResponse } from "next/server";
import { LogsEngine } from "@/lib/observability/logs-engine";

export async function GET() {
  const logs = await LogsEngine.getLogs("ws-1");
  return NextResponse.json({ success: true, logs });
}
