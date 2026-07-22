import { NextRequest, NextResponse } from "next/server";
import { processOperationalOptimization } from "@/lib/optimization/operational-optimization-engine";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
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
    const { objectiveId } = await req.json();

    if (!objectiveId) {
      return NextResponse.json({ error: "Missing objectiveId" }, { status: 400 });
    }

    const optimizationData = await processOperationalOptimization(workspaceId, objectiveId);
    return NextResponse.json(optimizationData);
  } catch (error) {
    console.error("Error solving optimization:", error);
    return NextResponse.json({ error: "Failed to solve optimization" }, { status: 500 });
  }
}
