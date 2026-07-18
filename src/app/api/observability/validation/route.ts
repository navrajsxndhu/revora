import { NextResponse } from "next/server";
import { ValidationEngine } from "@/lib/observability/validation-engine";

export async function GET() {
  const validation = await ValidationEngine.validate("ws-1");
  return NextResponse.json({ success: true, validation });
}
