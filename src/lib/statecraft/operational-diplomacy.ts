import { prisma } from '@/lib/prisma';

export async function resolveDiplomacyConflict(federationId: string, conflictType: string) {
  let resolutionStrategy = 'PENDING';
  let stabilityImpact = 0;

  if (conflictType === 'FREEZE_OVERLAP') {
    resolutionStrategy = 'ENFORCE_STRICTEST_TREATY';
    stabilityImpact = +10.0;
  } else if (conflictType === 'TREASURY_CONTENTION') {
    resolutionStrategy = 'BALANCED_RESOURCE_ISOLATION';
    stabilityImpact = -5.0;
  } else {
    resolutionStrategy = 'DEFAULT_SOVEREIGNTY_FALLBACK';
  }

  return prisma.operationalDiplomacyEvent.create({
    data: {
      federationId,
      conflictType,
      resolutionStrategy,
      stabilityImpact
    }
  });
}
