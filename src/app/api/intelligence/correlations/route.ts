import { NextRequest, NextResponse } from "next/server";
import { correlateIntelligence } from "@/lib/intelligence/intelligence-correlation";
import { extractOperationalSignals } from "@/lib/intelligence/operational-signals";
import { calculateOrganizationalHealth } from "@/lib/intelligence/organizational-health";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const signals = extractOperationalSignals();
    const { components } = calculateOrganizationalHealth();
    const correlations = correlateIntelligence(signals, components);
    return NextResponse.json(correlations);
  } catch (error) {
    console.error("Error correlating intelligence:", error);
    return NextResponse.json({ error: "Failed to correlate intelligence" }, { status: 500 });
  }
}
