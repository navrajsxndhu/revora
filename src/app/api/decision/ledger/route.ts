import { NextRequest, NextResponse } from "next/server";
import { getDecisionLedger, recordDecision } from "@/lib/decision/decision-ledger";
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
    const ledger = await getDecisionLedger(workspaceId);
    return NextResponse.json(ledger);
  } catch {
    console.error("Error fetching decision ledger:", error);
    return NextResponse.json({ error: "Failed to fetch ledger" }, { status: 500 });
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
    const { decisionType, selectedOption, tradeoffs, score } = await req.json();
    const recorded = await recordDecision(workspaceId, decisionType, selectedOption, tradeoffs, score);
    return NextResponse.json(recorded);
  } catch {
    console.error("Error recording decision:", error);
    return NextResponse.json({ error: "Failed to record decision" }, { status: 500 });
  }
}
