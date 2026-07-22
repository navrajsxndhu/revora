import { NextRequest, NextResponse } from "next/server";
import { orchestrateOperationalIntegration } from "@/lib/integration/operational-integration-engine";
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
    const result = await orchestrateOperationalIntegration(workspaceId);
    return NextResponse.json(result);
  } catch {
    console.error("Error synchronizing events:", error);
    return NextResponse.json({ error: "Failed to synchronize events" }, { status: 500 });
  }
}
