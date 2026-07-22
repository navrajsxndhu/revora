import { NextRequest, NextResponse } from "next/server";
import { calculateServiceMetrics } from "@/lib/benchmarks/service-benchmarks";
import { getHistoricalInsights } from "@/lib/benchmarks/operational-memory";

export async function GET(req: NextRequest) {
  const service = req.nextUrl.searchParams.get("service");
  if (!service) {
    return NextResponse.json({ error: "Service name required" }, { status: 400 });
  }

  try {
    const metrics = await calculateServiceMetrics(service);
    
    // We need a dummy incident to query historical insights since it takes an Incident object
    // Just build a minimal object that satisfies the type enough for the function
    const dummyIncident: any = { serviceAffected: service, id: "dummy" };
    const insights = await getHistoricalInsights(dummyIncident);

    return NextResponse.json({
      service,
      incidentsCount: metrics.incidentCount,
      mttr: Math.round(metrics.mttrMinutes),
      blastRadius: metrics.avgBlastRadius,
      mostSuccessfulAction: insights?.mostSuccessfulAction || null,
    });
  } catch (error) {
    console.error("[CLI_HISTORY_API]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
