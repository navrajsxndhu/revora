import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const events = await prisma.enterpriseEvent.findMany({ where: { workspaceId: "ws-1" } });
  return NextResponse.json({ success: true, events });
}
