import { NextRequest, NextResponse } from "next/server";
import { getAvailableObjectiveFunctions } from "@/lib/optimization/objective-functions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const objectives = getAvailableObjectiveFunctions();
    return NextResponse.json(objectives);
  } catch {
    console.error("Error fetching objectives:", error);
    return NextResponse.json({ error: "Failed to fetch objectives" }, { status: 500 });
  }
}
