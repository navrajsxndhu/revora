import { prisma } from '@/lib/prisma';

export async function calculateTemporalDrift(workspaceId: string) {
  const survivabilityDecay = 1.2;
  const governanceErosionRate = 0.5;
  const driftScore = survivabilityDecay * 10 + governanceErosionRate * 5;

  return prisma.temporalDriftSnapshot.create({
    data: {
      workspaceId,
      driftScore,
      survivabilityDecay,
      governanceErosionRate
    }
  });
}
