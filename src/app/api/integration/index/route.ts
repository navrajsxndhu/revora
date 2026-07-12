import { NextRequest, NextResponse } from "next/server";
import { calculateIntegrationIndex } from "@/lib/integration/integration-index";
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
    const indexData = await calculateIntegrationIndex(workspaceId);
    return NextResponse.json(indexData);
  } catch (error) {
    console.error("Error fetching integration index:", error);
    return NextResponse.json({ error: "Failed to fetch index" }, { status: 500 });
  }
}
