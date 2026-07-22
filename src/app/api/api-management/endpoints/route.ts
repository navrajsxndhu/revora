import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const workspaceId = "ws-123";
  //     const data = [];
  const data: unknown[] = [];
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
