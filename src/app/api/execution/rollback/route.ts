import { NextRequest, NextResponse } from "next/server";
import { generateRollbackPlan } from "@/lib/execution/rollback-coordination";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { executionId } = await req.json();

    if (!executionId) {
      return NextResponse.json({ error: "Missing executionId" }, { status: 400 });
    }

    const execution = await prisma.operationalExecution.findUnique({
      where: { id: executionId }
    });

    if (!execution) {
      return NextResponse.json({ error: "Execution not found" }, { status: 404 });
    }

    const rollback = await generateRollbackPlan(executionId);
    return NextResponse.json(rollback);
  } catch {
    console.error("Error generating rollback plan:", error);
    return NextResponse.json({ error: "Failed to generate rollback plan" }, { status: 500 });
  }
}
