import { NextResponse } from "next/server";
import { DiagnosticsEngine } from "@/lib/observability/diagnostics-engine";

export async function GET() {
  const diagnostics = await DiagnosticsEngine.getSessions("ws-1");
  return NextResponse.json({ success: true, diagnostics });
}
