import { NextRequest, NextResponse } from "next/server";
import { simulateKnowledgeEvolution, KnowledgeSimulationScenario } from "@/lib/knowledge/knowledge-simulator";
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
      return NextResponse.json({ error: "Missing scenario parameter" }, { status: 400 });
    }

    const simulation = simulateKnowledgeEvolution(scenario as KnowledgeSimulationScenario);
    return NextResponse.json(simulation);
  } catch (error) {
    console.error("Error simulating knowledge evolution:", error);
    return NextResponse.json({ error: "Failed to simulate evolution" }, { status: 500 });
  }
}
