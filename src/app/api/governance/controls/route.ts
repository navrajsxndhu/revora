import { NextRequest, NextResponse } from "next/server";
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
  if (!workspaceId) return NextResponse.json({ error: "Workspace not found" }, { status: 404 });

  try {
    const controls = {
      "Release": ["Security", "SRE", "Treasury", "Constitution", "Platform Readiness"],
      "Incident": ["Constitution", "SRE"],
      "Change": ["Security", "Constitution"],
      "Platform": ["Security", "FinOps", "Constitution"],
      "Workflows": ["Security", "Constitution"],
      "CMDB": ["Constitution"],
      "FinOps": ["Treasury", "Constitution"]
    };
    return NextResponse.json(controls);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch controls" }, { status: 500 });
  }
}
