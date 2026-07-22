import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { createServiceRequest } from "@/lib/service-management/request-engine";

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
    const result = await createServiceRequest(workspaceId, body.category, body.payload);
    return NextResponse.json(result);
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message || "Failed to create service request" }, { status: 500 });
  }
}
