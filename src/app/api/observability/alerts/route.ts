import { NextResponse } from "next/server";
import { AlertEngine } from "@/lib/observability/alert-engine";

export async function GET() {
  const alerts = await AlertEngine.getAlerts("ws-1");
  return NextResponse.json({ success: true, alerts });
}
