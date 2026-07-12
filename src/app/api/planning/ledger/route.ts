import { NextRequest, NextResponse } from "next/server";
import { getPlanningLedger } from "@/lib/planning/planning-ledger";
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
    const ledger = await getPlanningLedger(workspaceId);
    return NextResponse.json(ledger);
  } catch (error) {
    console.error("Error fetching planning ledger:", error);
    return NextResponse.json({ error: "Failed to fetch planning ledger" }, { status: 500 });
  }
}
