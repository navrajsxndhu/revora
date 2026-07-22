import { NextRequest, NextResponse } from "next/server";
import { defineOperationalIntent, getOperationalIntent } from "@/lib/assurance/operational-intent";
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
    const { executionId, objective, expectedOutcome } = await req.json();

    if (!executionId || !objective || !expectedOutcome) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const intent = await defineOperationalIntent(workspaceId, executionId, objective, expectedOutcome);
    return NextResponse.json(intent);
  } catch {
    console.error("Error defining intent:", error);
    return NextResponse.json({ error: "Failed to define intent" }, { status: 500 });
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const executionId = searchParams.get('executionId');

    if (!executionId) {
      return NextResponse.json({ error: "Missing executionId" }, { status: 400 });
    }

    const intent = await getOperationalIntent(executionId);
    return NextResponse.json(intent);
  } catch {
    console.error("Error fetching intent:", error);
    return NextResponse.json({ error: "Failed to fetch intent" }, { status: 500 });
  }
}
