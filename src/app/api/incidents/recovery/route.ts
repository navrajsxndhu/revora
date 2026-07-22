import { NextRequest, NextResponse } from "next/server";
import { generateRecoveryPlan } from "@/lib/incidents/recovery-planning";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(req.url);
    const incidentId = url.searchParams.get("incidentId") || "";
    if (!incidentId) return NextResponse.json({ error: "incidentId required" }, { status: 400 });

    const recovery = await generateRecoveryPlan(incidentId);
    return NextResponse.json(recovery);
  } catch {
    console.error("Error fetching recovery plan:", error);
    return NextResponse.json({ error: "Failed to fetch recovery plan" }, { status: 500 });
  }
}
