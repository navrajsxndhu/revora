import { NextRequest, NextResponse } from "next/server";
import { simulateImmunityStress, ImmunitySimulationScenario } from "@/lib/immunity/immunity-simulator";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { baseImmunity, scenario } = await req.json();

    if (!scenario) {
      return NextResponse.json({ error: "Missing scenario parameter" }, { status: 400 });
    }

    const simulation = simulateImmunityStress(
      baseImmunity || 100,
      scenario as ImmunitySimulationScenario
    );

    return NextResponse.json(simulation);
  } catch {
    console.error("Error running immunity simulation:", error);
    return NextResponse.json({ error: "Failed to run simulation" }, { status: 500 });
  }
}
