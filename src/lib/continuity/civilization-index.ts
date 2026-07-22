import { prisma } from '@/lib/prisma';

export async function calculateCivilizationIndex(workspaceId: string, entropySnapshot: unknown) {
  let civilizationIndex = 100 - (entropySnapshot.entropyScore * 0.75);
  civilizationIndex = Math.max(0, civilizationIndex);

  let continuityClass = 'EMERGING';
  let survivabilityHorizon = '< 1 Year';

  if (civilizationIndex > 90) {
    continuityClass = 'CIVILIZATIONAL';
    survivabilityHorizon = '> 10 Years';
  } else if (civilizationIndex > 75) {
    continuityClass = 'ENDURING';
    survivabilityHorizon = '5 - 10 Years';
  } else if (civilizationIndex > 50) {
    continuityClass = 'RESILIENT';
    survivabilityHorizon = '1 - 5 Years';
  } else if (civilizationIndex > 30) {
    continuityClass = 'STABILIZED';
    survivabilityHorizon = '< 1 Year';
  } else {
    continuityClass = 'EMERGING';
    survivabilityHorizon = '< 3 Months';
  }

  return prisma.operationalContinuitySnapshot.create({
    data: {
      workspaceId,
      civilizationIndex,
      survivabilityHorizon,
      continuityClass,
      institutionalStability: civilizationIndex
    }
  });
}
