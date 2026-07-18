import { NextResponse } from "next/server";
import { ApprovalEngine } from "@/lib/orchestration/approval-engine";

export async function GET() {
  const approvals = await ApprovalEngine.getApprovals("ws-1");
  return NextResponse.json({ success: true, approvals });
}
