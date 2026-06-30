import { prisma } from "../prisma";

export async function detectAntiPatterns(workspaceId: string, serviceName: string) {
  const dna = await prisma.reliabilityDNA.findUnique({
    where: { workspaceId_service: { workspaceId, service: serviceName } }
  });

  if (!dna) return;

  const patterns = [];

  if (dna.rollbackAcceleration > 0.3) {
    patterns.push({
      patternType: "RISING_ROLLBACK_ACCELERATION",
      severity: "HIGH",
      evidence: JSON.stringify({ threshold: 0.3, actual: dna.rollbackAcceleration }),
      recommendation: "Increase canary duration and mandate peer review for next 5 deployments."
    });
  }

  if (dna.blastRadiusGrowth > 1.5) {
    patterns.push({
      patternType: "BLAST_RADIUS_AMPLIFICATION",
      severity: "CRITICAL",
      evidence: JSON.stringify({ growthRate: dna.blastRadiusGrowth }),
      recommendation: "Decouple async dependencies and apply strict regional throttling."
    });
  }

  for (const p of patterns) {
    await prisma.antiPatternEvent.create({
      data: {
        workspaceId,
        service: serviceName,
        patternType: p.patternType,
        severity: p.severity,
        evidence: p.evidence,
        recommendation: p.recommendation
      }
    });
  }
}
