import { NextResponse } from "next/server";
import { ApprovalEngine } from "@/lib/identity/approval-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const workflows = await ApprovalEngine.getApprovals(workspaceId);
    return NextResponse.json({ workflows });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch approvals" }, { status: 500 });
  }
}
