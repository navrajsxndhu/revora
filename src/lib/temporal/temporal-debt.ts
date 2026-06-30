import { prisma } from '@/lib/prisma';

export async function calculateTemporalDebt(workspaceId: string) {
  const deferredResilienceBurden = 25.0;
  const modernizationLiability = 15.0;
  const debtScore = deferredResilienceBurden + modernizationLiability;

  return prisma.temporalDebtProfile.create({
    data: {
      workspaceId,
      debtScore,
      deferredResilienceBurden,
      modernizationLiability
    }
  });
}
