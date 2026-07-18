import { prisma } from "@/lib/prisma";

export async function generateImpactAssessment(changeId: string) {
  // Deterministic impact synthesis
  return await prisma.changeImpactAssessment.create({
    data: {
      changeId,
      affectedServices: "Auth, API",
      affectedRegions: "Global",
      dependencyCount: "12",
      treasuryImpact: "0",
      executionComplexity: "45.5",
      rollbackComplexity: "60.0",
      assuranceHistory: "STABLE",
      infrastructureReadiness: "true",
      workspaceId: "SYSTEM"
    } as any
  });
}

