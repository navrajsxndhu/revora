import { NextRequest, NextResponse } from "next/server";
import { detectArchitecturalDrift } from "@/lib/release/drift-detection";

export async function GET(req: NextRequest) {
  const service = req.nextUrl.searchParams.get("service");
  if (!service) {
    return NextResponse.json({ error: "Service name required" }, { status: 400 });
  }

  try {
    const drift = await detectArchitecturalDrift(service);

    return NextResponse.json({
      service,
      driftWarnings: drift.driftWarnings,
      maxBlastRadius: drift.maxBlastRadius,
      recentFailures: drift.recentFailures
    });
  } catch (error) {
    console.error("[CLI_RISK_API]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
