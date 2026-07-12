import { NextRequest, NextResponse } from "next/server";
import { enforceSurvivabilityQuarantine } from "@/lib/immunity/survivability-quarantine";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
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

  // We could fetch a federationId if they are part of one, but for now we'll pass undefined
  try {
    const quarantine = await enforceSurvivabilityQuarantine(workspaceId, undefined);
    return NextResponse.json(quarantine);
  } catch (error) {
    console.error("Error evaluating quarantine:", error);
    return NextResponse.json({ error: "Failed to evaluate quarantine" }, { status: 500 });
  }
}
