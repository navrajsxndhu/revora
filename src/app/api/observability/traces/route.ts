import { NextResponse } from "next/server";
import { TracesEngine } from "@/lib/observability/traces-engine";

export async function GET() {
  const traces = await TracesEngine.getTraces("ws-1");
  return NextResponse.json({ success: true, traces });
}
