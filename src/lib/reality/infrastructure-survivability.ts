import { prisma } from '@/lib/prisma';

export async function calculateInfrastructureSurvivability(workspaceId: string, region: string) {
  const energyReliability = region === 'us-east-1' ? 70.0 : 95.0;
  const concentration = 40.0;
  
  const survivabilityScore = Math.max(0, energyReliability - (concentration * 0.2));

  return prisma.infrastructureSurvivabilitySnapshot.create({
    data: {
      workspaceId,
      region,
      survivabilityScore,
      infrastructureConcentration: concentration,
      energyReliability
    }
  });
}
