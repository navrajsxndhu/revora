import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { evaluateDeploymentRisk, DeploymentPayload } from "@/lib/release/risk-analysis";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json() as DeploymentPayload;

    if (!payload.serviceName || !payload.commitSha || !payload.changedFiles) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const evaluation = await evaluateDeploymentRisk(payload);

    const deployment = await prisma.deployment.create({
      data: {
        serviceName: payload.serviceName,
        commitSha: payload.commitSha,
        environment: payload.environment || "production",
        changedFiles: JSON.stringify(payload.changedFiles),
        dependencyChanges: payload.dependencyChanges ? JSON.stringify(payload.dependencyChanges) : null,
        riskLevel: evaluation.riskLevel,
        riskReasoning: evaluation.riskReasoning,
        rolloutStrategy: evaluation.rolloutStrategy,
        status: "EVALUATED"
      }
    });

    return NextResponse.json({
      deploymentId: deployment.id,
      riskLevel: evaluation.riskLevel,
      riskReasoning: evaluation.riskReasoning,
      rolloutStrategy: evaluation.rolloutStrategy,
      driftWarnings: evaluation.driftWarnings,
      proceed: true // Revora provides guidance, does not block
    });

  } catch (error) {
    console.error("[RELEASE_EVALUATE] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
