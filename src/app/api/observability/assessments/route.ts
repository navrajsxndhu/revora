import { NextResponse } from "next/server";
import { ObservabilityAssessmentEngine } from "@/lib/observability/observability-assessment-engine";

export async function GET() {
  const assessments = await ObservabilityAssessmentEngine.getAssessments("ws-1");
  return NextResponse.json({ success: true, assessments });
}
