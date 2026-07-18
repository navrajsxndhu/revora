import { NextResponse } from "next/server";
import { ApiValidationEngine } from "@/lib/api-governance/api-validation-engine";

export async function GET() {
  const validation = await ApiValidationEngine.validate("ws-1");
  return NextResponse.json({ success: true, validation });
}
