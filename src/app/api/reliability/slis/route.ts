import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(req.url);
    const sloId = url.searchParams.get("sloId");
    if (!sloId) return NextResponse.json({ error: "sloId required" }, { status: 400 });

    const slis = await prisma.serviceLevelIndicator.findMany({
      where: { sloId },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(slis);
  } catch {
    return NextResponse.json({ error: "Failed to fetch SLIs" }, { status: 500 });
  }
}
