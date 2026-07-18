import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const consumers = await prisma.apiConsumer.findMany({ where: { workspaceId: "ws-1" } });
  return NextResponse.json({ success: true, consumers });
}
