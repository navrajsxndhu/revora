import { NextResponse } from "next/server";
import { RecoveryValidationEngine } from "@/lib/resilience/recovery-validation-engine";

export async function GET() {
  const validations = await RecoveryValidationEngine.getValidations("ws-1");
  return NextResponse.json({ success: true, validations });
}
