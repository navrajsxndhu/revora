import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const providers = await prisma.apiProvider.findMany({ where: { workspaceId: "ws-1" } });
  return NextResponse.json({ success: true, providers });
}
