import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(req.url);
    const changeId = url.searchParams.get("changeId");
    if (!changeId) return NextResponse.json({ error: "changeId required" }, { status: 400 });

    const impact = await prisma.changeImpactAssessment.findFirst({
      where: { changeId }
    });
    return NextResponse.json(impact || {});
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch impact" }, { status: 500 });
  }
}
