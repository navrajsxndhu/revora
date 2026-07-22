import { NextRequest, NextResponse } from "next/server";
import { evaluateReleaseGate, GateContext } from "@/lib/release/release-gates";
import { generatePRComment } from "@/lib/release/github-comment";
import { detectArchitecturalDrift } from "@/lib/release/drift-detection";
import { getHistoricalInsights } from "@/lib/benchmarks/operational-memory";
import { calculateServiceMetrics } from "@/lib/benchmarks/service-benchmarks";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const serviceName = payload.serviceName;
    const localRiskLevel = payload.riskLevel || "LOW";
    const localReasons = payload.reasons || [];
    const rolloutStrategy = payload.rolloutStrategy || "Standard Rollout (100%)";

    if (!serviceName) {
      return NextResponse.json({ error: "Missing serviceName" }, { status: 400 });
    }

    const drift = await detectArchitecturalDrift(serviceName);
    const metrics = await calculateServiceMetrics(serviceName);
    const insights = await getHistoricalInsights({ serviceAffected: serviceName, id: "dummy" } as any);

    const rollbackFrequency = metrics.incidentCount > 0 ? (metrics.rollbackCount / metrics.incidentCount) : 0;
    const historicalRecoverySuccess = metrics.recoverySuccessRate / 100;

    const context: GateContext = {
      riskLevel: localRiskLevel,
      localReasons,
      historicalBlastRadius: drift.maxBlastRadius,
      rollbackFrequency,
      driftWarnings: drift.driftWarnings,
      historicalRecoverySuccess
    };

    const gateResult = evaluateReleaseGate(context);

    const comment = generatePRComment({
      riskLevel: localRiskLevel,
      gateResult,
      rolloutStrategy,
      historicalContext: insights ? {
        occurrences: insights.previousOccurrences,
        avgRecoveryTime: insights.averageRecoveryTime
      } : undefined
    });

    return NextResponse.json({
      decision: gateResult.decision,
      reasoning: gateResult.reasoning,
      prCommentMarkdown: comment
    });

  } catch (error) {
    console.error("[RELEASE_GATE_API] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
