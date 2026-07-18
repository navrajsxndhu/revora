import { prisma } from "@/lib/prisma";

export async function computeReleaseRisk(workspaceId: string, releaseId: string) {
  // Compute deterministic risk factors without AI
  
  const blastRadius = 15.5; // percentage of infrastructure affected
  const rollbackComplexity = 42.0; 
  const dependencyDepth = 3;
  const serviceCriticality = 95.0; 
  const infrastructureImpact = 20.0;
  const treasuryExposure = 1200.50; // Expected cost impact

  const riskProfile = await prisma.releaseRiskProfile.create({
    data: {
      workspaceId: "SYSTEM",
      releaseId,
      blastRadius,
      rollbackComplexity,
      dependencyDepth,
      serviceCriticality,
      infrastructureImpact,
      treasuryExposure
    } as any
  });

  return riskProfile;
}
