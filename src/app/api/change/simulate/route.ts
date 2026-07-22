import { NextRequest, NextResponse } from "next/server";
import { simulateOperationalChange } from "@/lib/change/change-simulator";
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
  if (!workspaceId) return NextResponse.json({ error: "Workspace not found" }, { status: 404 });

  try {
    const { category } = await req.json();
    const simulation = await simulateOperationalChange(workspaceId, category);
    return NextResponse.json(simulation);
  } catch {
    return NextResponse.json({ error: "Failed to simulate change" }, { status: 500 });
  }
}
