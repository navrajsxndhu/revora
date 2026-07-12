import { prisma } from "@/lib/prisma";

export interface IntegrityResult {
  purityScore: number;
  corruptionExposure: number;
  integrityConfidence: number;
  evidence: string[];
}

export async function evaluateGovernanceIntegrity(workspaceId: string): Promise<IntegrityResult> {
  const evidence: string[] = [];

  const violations = await prisma.constitutionalViolation.findMany({
    where: { workspaceId },
    orderBy: { detectedAt: "desc" },
    take: 10
  });

  const constitution = await prisma.reliabilityConstitution.findUnique({
    where: { workspaceId }
  });

  let purityScore = 100.0;
  let corruptionExposure = 0.0;
  let integrityConfidence = 100.0;

  if (!constitution) {
    purityScore = 0.0;
    corruptionExposure = 100.0;
    integrityConfidence = 0.0;
    evidence.push("Total lack of constitutional governance. Operational purity is zero.");
    return { purityScore, corruptionExposure, integrityConfidence, evidence };
  }

  if (violations.length > 0) {
    const recentCritical = violations.filter(v => v.severity === "CRITICAL_BREACH" || v.severity === "SEVERE");
    
    if (recentCritical.length > 0) {
      purityScore -= 40;
      corruptionExposure += 30;
      integrityConfidence -= 35;
      evidence.push(`${recentCritical.length} severe constitutional violations detected. Governance integrity compromised.`);
    }

    if (violations.length >= 5) {
      purityScore -= 20;
      corruptionExposure += 20;
      evidence.push("High frequency of constitutional violations indicates spreading operational corruption.");
    }
  } else {
    evidence.push("No constitutional violations detected. High governance purity maintained.");
  }

  // Adjust confidence based on constitutional stability score from earlier phases
  if (constitution.constitutionalStabilityScore < 80) {
    integrityConfidence -= (100 - constitution.constitutionalStabilityScore) * 0.5;
    evidence.push(`Underlying constitutional instability reduces integrity confidence to ${integrityConfidence.toFixed(1)}%.`);
  }

  return {
    purityScore: Math.max(0, purityScore),
    corruptionExposure: Math.min(100, corruptionExposure),
    integrityConfidence: Math.max(0, integrityConfidence),
    evidence
  };
}
