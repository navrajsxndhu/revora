import { NextRequest, NextResponse } from "next/server";
import { calculateOrganizationalHealth } from "@/lib/intelligence/organizational-health";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const health = calculateOrganizationalHealth();
    return NextResponse.json(health);
  } catch (error) {
    console.error("Error calculating health:", error);
    return NextResponse.json({ error: "Failed to calculate health" }, { status: 500 });
  }
}
