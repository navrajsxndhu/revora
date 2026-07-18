import { NextResponse } from "next/server";
import { WorkflowEngine } from "@/lib/orchestration/workflow-engine";

export async function GET() {
  const workflows = await WorkflowEngine.getWorkflows("ws-1");
  return NextResponse.json({ success: true, workflows });
}
