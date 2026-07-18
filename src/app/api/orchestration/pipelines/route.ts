import { NextResponse } from "next/server";
import { PipelineEngine } from "@/lib/orchestration/pipeline-engine";

export async function GET() {
  const pipelines = await PipelineEngine.getPipelines("ws-1");
  return NextResponse.json({ success: true, pipelines });
}
