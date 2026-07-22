import { NextRequest, NextResponse } from "next/server";
import { simulateCoordinationOutcome } from "@/lib/coordination/coordination-simulator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const simulation = simulateCoordinationOutcome();
    return NextResponse.json(simulation);
  } catch (error) {
    console.error("Error simulating coordination:", error);
    return NextResponse.json({ error: "Failed to simulate coordination" }, { status: 500 });
  }
}
