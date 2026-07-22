import { NextRequest, NextResponse } from "next/server";
import { evaluateReleaseStrategy } from "@/lib/releases/release-strategy";
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
    const { releaseId } = await req.json();
    const strategy = await evaluateReleaseStrategy(workspaceId, releaseId);
    return NextResponse.json(strategy);
  } catch {
    console.error("Error evaluating strategy:", error);
    return NextResponse.json({ error: "Failed to evaluate strategy" }, { status: 500 });
  }
}
