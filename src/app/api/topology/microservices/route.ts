import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const workspaceId = "ws-123";
    const microservices = await prisma.microservice.findMany({ where: { workspaceId } });
    return NextResponse.json({ microservices });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch microservices" }, { status: 500 });
  }
}
