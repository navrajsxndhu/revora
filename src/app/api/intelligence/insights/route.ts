import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const insights = await prisma.operationalInsight.findMany({ where: { workspaceId } });
    return NextResponse.json({ insights });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch insights" }, { status: 500 });
  }
}
