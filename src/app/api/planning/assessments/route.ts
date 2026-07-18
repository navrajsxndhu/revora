import { NextResponse } from "next/server";
import { AssessmentEngine } from "@/lib/planning/assessment-engine";

export async function GET() {
  const assessments = await AssessmentEngine.getAssessments("ws-1");
  return NextResponse.json({ success: true, assessments });
}
