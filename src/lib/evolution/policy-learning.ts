import { prisma } from "../prisma";

export async function evaluatePolicyEffectiveness(workspaceId: string, serviceName: string) {
  // Analyze if CANARY_REQUIRED prevented escalation
  const dna = await prisma.reliabilityDNA.findUnique({
    where: { workspaceId_service: { workspaceId, service: serviceName } }
  });

  if (!dna) return;

  if (dna.rollbackAcceleration < 0.1 && dna.reliabilityTier === "STABLE") {
    // Policy was effective, or system is naturally stable
    await prisma.governanceLearningEvent.create({
      data: {
        workspaceId,
        service: serviceName,
        policyType: "CANARY_CONFIDENCE",
        previousValue: 0.5,
        newValue: 0.55,
        reason: "Stable rollback trends indicate successful canary isolation.",
        confidenceScore: 0.8
      }
    });
  } else if (dna.rollbackAcceleration > 0.3) {
    // Policy failing to contain
    await prisma.governanceLearningEvent.create({
      data: {
        workspaceId,
        service: serviceName,
        policyType: "DEPLOYMENT_FREEZE_SENSITIVITY",
        previousValue: 0.7,
        newValue: 0.8,
        reason: "Rising rollback acceleration requires tighter freeze triggers.",
        confidenceScore: 0.9
      }
    });
  }
}
