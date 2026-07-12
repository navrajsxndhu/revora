import { NextRequest, NextResponse } from "next/server";
import { simulateIntelligenceScenario } from "@/lib/intelligence/intelligence-simulator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { scenario } = await req.json();

    if (!scenario) {
      return NextResponse.json({ error: "Missing scenario" }, { status: 400 });
    }

    const simulation = simulateIntelligenceScenario(scenario);
    return NextResponse.json(simulation);
  } catch (error) {
    console.error("Error simulating intelligence:", error);
    return NextResponse.json({ error: "Failed to simulate intelligence" }, { status: 500 });
  }
}
