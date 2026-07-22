import { NextRequest, NextResponse } from "next/server";
import { validateReleasePackage } from "@/lib/releases/release-package";
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
    const { releaseId, packages } = await req.json();
    const validated = await validateReleasePackage(workspaceId, releaseId, packages);
    return NextResponse.json(validated);
  } catch {
    console.error("Error validating packages:", error);
    return NextResponse.json({ error: "Failed to validate packages" }, { status: 500 });
  }
}
