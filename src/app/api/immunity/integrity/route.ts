import { NextRequest, NextResponse } from "next/server";
import { evaluateGovernanceIntegrity } from "@/lib/immunity/governance-integrity";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET() {
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
    const integrity = await evaluateGovernanceIntegrity(workspaceId);
    return NextResponse.json(integrity);
  } catch {
    console.error("Error evaluating integrity:", error);
    return NextResponse.json({ error: "Failed to evaluate integrity" }, { status: 500 });
  }
}
