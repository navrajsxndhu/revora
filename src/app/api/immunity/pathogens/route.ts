import { NextRequest, NextResponse } from "next/server";
import { detectOperationalPathogens } from "@/lib/immunity/pathogen-detection";
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
    const pathogens = await detectOperationalPathogens(workspaceId);
    return NextResponse.json(pathogens);
  } catch (error) {
    console.error("Error detecting pathogens:", error);
    return NextResponse.json({ error: "Failed to detect pathogens" }, { status: 500 });
  }
}
