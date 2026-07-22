import { NextRequest, NextResponse } from "next/server";
import { buildIncidentTimeline } from "@/lib/incidents/incident-timeline";
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

    const timeline = await buildIncidentTimeline(incidentId);
    return NextResponse.json(timeline);
  } catch (error) {
    console.error("Error fetching timeline:", error);
    return NextResponse.json({ error: "Failed to fetch timeline" }, { status: 500 });
  }
}
