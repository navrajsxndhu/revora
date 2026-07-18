import { NextRequest, NextResponse } from "next/server";
import { analyzeRootCause } from "@/lib/incidents/root-cause-analysis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(req.url);
    const incidentId = url.searchParams.get("incidentId") || "";
    if (!incidentId) return NextResponse.json({ error: "incidentId required" }, { status: 400 });

    const evidence = await analyzeRootCause(incidentId);
    return NextResponse.json(evidence);
  } catch (error) {
    console.error("Error fetching evidence:", error);
    return NextResponse.json({ error: "Failed to fetch evidence" }, { status: 500 });
  }
}
