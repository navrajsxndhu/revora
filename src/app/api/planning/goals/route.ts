import { NextRequest, NextResponse } from "next/server";
import { getAvailablePlanningGoals } from "@/lib/planning/planning-goals";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const goals = getAvailablePlanningGoals();
    return NextResponse.json(goals);
  } catch {
    console.error("Error fetching planning goals:", error);
    return NextResponse.json({ error: "Failed to fetch planning goals" }, { status: 500 });
  }
}
