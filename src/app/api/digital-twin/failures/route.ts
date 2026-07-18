import { NextResponse } from "next/server";
import { FailureEngine } from "@/lib/digital-twin/failure-engine";

export async function GET() {
  const failures = await FailureEngine.getFailures("ws-1");
  return NextResponse.json({ success: true, failures });
}
