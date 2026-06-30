import { prisma } from "../prisma";

export async function evaluateRolloutStrategy(workspaceId: string, serviceName: string) {
  const dna = await prisma.reliabilityDNA.findUnique({
    where: { workspaceId_service: { workspaceId, service: serviceName } }
  });

  if (!dna) return { canarySize: 10, observationMinutes: 5, strategy: "STANDARD" };

  if (dna.reliabilityTier === "CRITICAL") {
    // Unstable DNA requires tight rollouts
    return { canarySize: 1, observationMinutes: 15, strategy: "STRICT_STAGED" };
  } else if (dna.reliabilityTier === "VOLATILE") {
    return { canarySize: 5, observationMinutes: 10, strategy: "CONSERVATIVE" };
  }

  // Stable DNA earns relaxed governance
  return { canarySize: 20, observationMinutes: 2, strategy: "ACCELERATED" };
}
