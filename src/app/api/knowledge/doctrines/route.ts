import { NextRequest, NextResponse } from "next/server";
import { trackDoctrineEvolution } from "@/lib/knowledge/doctrine-evolution";
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
    const result = await trackDoctrineEvolution(workspaceId);
    return NextResponse.json(result);
  } catch {
    console.error("Error tracking doctrines:", error);
    return NextResponse.json({ error: "Failed to track doctrines" }, { status: 500 });
  }
}
