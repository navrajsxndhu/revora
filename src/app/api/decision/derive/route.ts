import { NextRequest, NextResponse } from "next/server";
import { constructDecisionContext } from "@/lib/decision/decision-context";
import { deriveAlternatives } from "@/lib/decision/decision-derivation";
import { analyzeTradeoffs } from "@/lib/decision/tradeoff-analysis";
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
    const context = await constructDecisionContext(workspaceId);
    const alternatives = deriveAlternatives(context);
    const tradeoffs = analyzeTradeoffs(alternatives);
    
    return NextResponse.json({ context, alternatives, tradeoffs });
  } catch {
    console.error("Error deriving alternatives:", error);
    return NextResponse.json({ error: "Failed to derive alternatives" }, { status: 500 });
  }
}
