import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const retention = await prisma.telemetryRetention.findMany({ where: { workspaceId: "ws-1" } });
  return NextResponse.json({ success: true, retention });
}
