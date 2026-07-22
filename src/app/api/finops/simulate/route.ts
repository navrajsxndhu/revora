import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { simulateFinOpsScenario } from "@/lib/finops/finops-simulator";

export async function POST(req: NextRequest) {
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
    const body = await req.json();
    const result = await simulateFinOpsScenario(workspaceId, body.scenario);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to simulate finops scenario" }, { status: 500 });
  }
}
