import { NextResponse } from "next/server";
import { PlanningValidationEngine } from "@/lib/planning/planning-validation-engine";

export async function GET() {
  const validation = await PlanningValidationEngine.validate("ws-1", "all");
  return NextResponse.json({ success: true, validation });
}
