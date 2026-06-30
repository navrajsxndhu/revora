import { prisma } from "../prisma";

export async function computeReliabilityDNA(workspaceId: string, serviceName: string) {
  // Pull historical operational metrics
  const deployments = await prisma.deployment.findMany({
    where: { workspaceId, serviceName },
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: { incidents: true }
  });

  if (deployments.length === 0) return null;

  let rollbackCount = 0;
  let incidentCount = 0;
  let mttrAcc = 0;

  for (const d of deployments) {
    if (d.rollbackCount > 0) rollbackCount++;
    incidentCount += d.incidents.length;
    // Mock MTTR for demonstration
    for (const inc of d.incidents) {
      if (inc.resolvedAt) {
        mttrAcc += (inc.resolvedAt.getTime() - inc.createdAt.getTime()) / 60000;
      }
    }
  }

  const mttrTrend = incidentCount > 0 ? mttrAcc / incidentCount : 0;
  const rollbackAcceleration = rollbackCount / deployments.length;
  const blastRadiusGrowth = (incidentCount / deployments.length) * 1.5; // Mock metric
  
  // Calculate tier
  let reliabilityTier = "STABLE";
  if (rollbackAcceleration > 0.2 || mttrTrend > 120) reliabilityTier = "VOLATILE";
  if (rollbackAcceleration > 0.4 || blastRadiusGrowth > 2) reliabilityTier = "CRITICAL";

  // Upsert the DNA profile
  const dna = await prisma.reliabilityDNA.upsert({
    where: { workspaceId_service: { workspaceId, service: serviceName } },
    create: {
      workspaceId,
      service: serviceName,
      mttrTrend,
      rollbackAcceleration,
      blastRadiusGrowth,
      governanceViolationRate: 0.05, // Mock initial state
      recoveryReliability: 0.9,
      stressSensitivity: 0.6,
      reliabilityTier
    },
    update: {
      mttrTrend,
      rollbackAcceleration,
      blastRadiusGrowth,
      reliabilityTier
    }
  });

  return dna;
}
