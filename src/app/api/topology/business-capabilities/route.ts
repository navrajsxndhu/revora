import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const capabilities = await prisma.businessCapability.findMany({ where: { workspaceId } });
    return NextResponse.json({ capabilities });
  } catch {
    return NextResponse.json({ error: "Failed to fetch capabilities" }, { status: 500 });
  }
}
