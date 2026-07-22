import { NextRequest, NextResponse } from "next/server";
import { simulateIncident } from "@/lib/incidents/incident-simulator";
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
    const { scenario } = await req.json();
    const result = await simulateIncident(workspaceId, scenario);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error simulating incident:", error);
    return NextResponse.json({ error: "Failed to simulate incident" }, { status: 500 });
  }
}
