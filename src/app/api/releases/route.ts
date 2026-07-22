import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createEnterpriseRelease } from "@/lib/releases/enterprise-release-engine";

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
    const releases = await prisma.enterpriseRelease.findMany({
      where: { workspaceId, status: { in: ["PLANNING", "EXECUTING", "VERIFYING"] } },
      include: {
        approvals: true,
        checkpoints: true,
      }
    });
    return NextResponse.json(releases);
  } catch {
    console.error("Error fetching releases:", error);
    return NextResponse.json({ error: "Failed to fetch releases" }, { status: 500 });
  }
}

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
    const { releaseName } = await req.json();
    const release = await createEnterpriseRelease(workspaceId, releaseName);
    return NextResponse.json(release);
  } catch {
    console.error("Error creating release:", error);
    return NextResponse.json({ error: "Failed to create release" }, { status: 500 });
  }
}
