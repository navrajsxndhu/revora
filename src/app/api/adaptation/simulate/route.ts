import { NextRequest, NextResponse } from "next/server";
import { simulateAdaptation, AdaptationSimulationScenario } from "@/lib/adaptation/adaptation-simulator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { scenario } = await req.json();

    if (!scenario) {
      return NextResponse.json({ error: "Missing scenario parameter" }, { status: 400 });
    }

    const simulation = simulateAdaptation(scenario as AdaptationSimulationScenario);
    return NextResponse.json(simulation);
  } catch {
    console.error("Error running adaptation simulation:", error);
    return NextResponse.json({ error: "Failed to run simulation" }, { status: 500 });
  }
}
