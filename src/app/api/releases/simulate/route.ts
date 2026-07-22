import { NextRequest, NextResponse } from "next/server";
import { simulateRelease } from "@/lib/releases/release-simulator";
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
    const { rolloutType } = await req.json();
    const simulation = await simulateRelease(workspaceId, rolloutType);
    return NextResponse.json(simulation);
  } catch (error) {
    console.error("Error simulating release:", error);
    return NextResponse.json({ error: "Failed to simulate release" }, { status: 500 });
  }
}
