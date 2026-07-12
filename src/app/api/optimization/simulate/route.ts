import { NextRequest, NextResponse } from "next/server";
import { simulateOptimizationImpact } from "@/lib/optimization/optimization-simulator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

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
  if (!workspaceId) {
    return NextResponse.json({ error: "Workspace not found" }, { status: 404 });
  }

  try {
    const { optimizationId, configuration } = await req.json();

    if (!optimizationId || !configuration) {
      return NextResponse.json({ error: "Missing optimizationId or configuration" }, { status: 400 });
    }

    const simulation = await simulateOptimizationImpact(workspaceId, optimizationId, configuration);
    return NextResponse.json(simulation);
  } catch (error) {
    console.error("Error simulating optimization:", error);
    return NextResponse.json({ error: "Failed to simulate optimization" }, { status: 500 });
  }
}
