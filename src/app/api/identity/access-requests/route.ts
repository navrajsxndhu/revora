import { NextResponse } from "next/server";
import { ApprovalEngine } from "@/lib/identity/approval-engine";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const requests = await ApprovalEngine.getApprovals(workspaceId);
    return NextResponse.json({ requests });
  } catch {
    return NextResponse.json({ error: "Failed to fetch access requests" }, { status: 500 });
  }
}
