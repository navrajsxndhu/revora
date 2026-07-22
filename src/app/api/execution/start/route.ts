import { NextRequest, NextResponse } from "next/server";
import { processOperationalExecution } from "@/lib/execution/operational-execution-engine";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

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
    const { decisionId, strategy } = await req.json();

    if (!decisionId || !strategy) {
      return NextResponse.json({ error: "Missing decisionId or strategy" }, { status: 400 });
    }

    const executionData = await processOperationalExecution(workspaceId, decisionId, strategy);
    return NextResponse.json(executionData);
  } catch {
    console.error("Error starting execution:", error);
    return NextResponse.json({ error: "Failed to start execution" }, { status: 500 });
  }
}
