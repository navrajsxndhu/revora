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
    const sloId = url.searchParams.get("sloId");
    if (!sloId) return NextResponse.json({ error: "sloId required" }, { status: 400 });

    const forecast = await prisma.reliabilityForecast.findFirst({
      where: { sloId },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(forecast || {});
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch forecast" }, { status: 500 });
  }
}
