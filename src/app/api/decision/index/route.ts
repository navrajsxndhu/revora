import { NextRequest, NextResponse } from "next/server";
import { processOperationalDecision } from "@/lib/decision/operational-decision-engine";
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
    const decisionData = await processOperationalDecision(workspaceId);
    return NextResponse.json(decisionData);
  } catch (error) {
    console.error("Error processing operational decision:", error);
    return NextResponse.json({ error: "Failed to process decision" }, { status: 500 });
  }
}
