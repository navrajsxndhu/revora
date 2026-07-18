import { NextResponse } from "next/server";
import { ConstraintEngine } from "@/lib/planning/constraint-engine";

export async function GET() {
  const constraints = await ConstraintEngine.getConstraints("ws-1");
  return NextResponse.json({ success: true, constraints });
}
