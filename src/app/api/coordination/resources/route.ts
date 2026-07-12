import { NextRequest, NextResponse } from "next/server";
import { coordinateResources } from "@/lib/coordination/resource-coordination";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const resources = coordinateResources();
    return NextResponse.json(resources);
  } catch (error) {
    console.error("Error coordinating resources:", error);
    return NextResponse.json({ error: "Failed to coordinate resources" }, { status: 500 });
  }
}
