import { NextResponse } from "next/server";
import { ValidationEngine } from "@/lib/orchestration/validation-engine";

export async function GET() {
  const validations = await ValidationEngine.getValidations("ws-1");
  return NextResponse.json({ success: true, validations });
}
