import { NextRequest, NextResponse } from "next/server";
import { detectOperationalDrift } from "@/lib/assurance/drift-validator";
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
    const drift = await detectOperationalDrift(workspaceId);
    return NextResponse.json(drift);
  } catch (error) {
    console.error("Error detecting drift:", error);
    return NextResponse.json({ error: "Failed to detect drift" }, { status: 500 });
  }
}
