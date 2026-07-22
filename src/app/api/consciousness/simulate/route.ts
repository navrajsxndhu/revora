import { NextRequest, NextResponse } from "next/server";
import { simulateConsciousnessDegradation, SimulationScenario } from "@/lib/consciousness/consciousness-simulator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { baseAwarenessScore, baseCoherence, baseIntegrity, scenario } = await req.json();

    if (!scenario) {
      return NextResponse.json({ error: "Missing scenario parameter" }, { status: 400 });
    }

    const simulation = simulateConsciousnessDegradation(
      baseAwarenessScore || 100,
      baseCoherence || 100,
      baseIntegrity || 100,
      scenario as SimulationScenario
    );

    return NextResponse.json(simulation);
  } catch {
    console.error("Error running consciousness simulation:", error);
    return NextResponse.json({ error: "Failed to run simulation" }, { status: 500 });
  }
}
