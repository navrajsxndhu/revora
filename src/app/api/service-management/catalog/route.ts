import { NextRequest, NextResponse } from "next/server";
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
  if (!workspaceId) return NextResponse.json({ error: "Workspace not found" }, { status: 404 });

  try {
    const catalog = [
      { id: "srv-1", name: "Provision Kubernetes Namespace", category: "Platform", requiredApprovals: ["Platform Engineering"] },
      { id: "srv-2", name: "Production Database Access", category: "Security", requiredApprovals: ["Security", "Service Owner"] }
    ];
    return NextResponse.json(catalog);
  } catch {
    return NextResponse.json({ error: "Failed to fetch catalog" }, { status: 500 });
  }
}
