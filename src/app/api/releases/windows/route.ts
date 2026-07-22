import { NextRequest, NextResponse } from "next/server";
import { validateReleaseWindow } from "@/lib/releases/release-window";
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

  try {
    const url = new URL(req.url);
    const releaseId = url.searchParams.get("releaseId") || "";
    const validation = await validateReleaseWindow(workspaceId, releaseId);
    return NextResponse.json(validation);
  } catch (error) {
    console.error("Error validating window:", error);
    return NextResponse.json({ error: "Failed to validate window" }, { status: 500 });
  }
}
