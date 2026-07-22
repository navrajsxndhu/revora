import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { memberships: true }
  });

  const workspaceId = user?.memberships[0]?.workspaceId;
  if (!workspaceId) {
    return NextResponse.json({ error: "Workspace not found" }, { status: 404 });
  }

  try {
    const { approvalId, status, comments } = await req.json();
    
    // Ensure the approval belongs to a release in this workspace
    const approval = await prisma.releaseApproval.findUnique({
      where: { id: approvalId },
      include: { release: true }
    });

    if (!approval || approval.release.workspaceId !== workspaceId) {
      return NextResponse.json({ error: "Approval not found" }, { status: 404 });
    }

    const updated = await prisma.releaseApproval.update({
      where: { id: approvalId },
      data: {
        status,
        comments,
        approvedAt: status === "APPROVED" ? new Date() : null
      }
    });

    return NextResponse.json(updated);
  } catch {
    console.error("Error updating approval:", error);
    return NextResponse.json({ error: "Failed to update approval" }, { status: 500 });
  }
}
