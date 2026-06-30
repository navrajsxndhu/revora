import { prisma } from '@/lib/prisma';

export async function calculateGovernanceEntropy(workspaceId: string) {
  const overrides = await prisma.constitutionalViolation.count({
    where: { 
      workspaceId,
      detectedAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } // Last 30 days
    }
  });

  const amendments = await prisma.constitutionalAmendment.count({
    where: {
      constitution: { workspaceId },
      createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    }
  });

  let entropyScore = (overrides * 2.5) + (amendments * 1.5);
  entropyScore = Math.min(100, entropyScore);

  let governanceDrift = 'STABLE';
  if (entropyScore > 80) governanceDrift = 'ENTROPIC';
  else if (entropyScore > 50) governanceDrift = 'FRAGMENTING';
  else if (entropyScore > 20) governanceDrift = 'DRIFTING';

  return prisma.governanceEntropySnapshot.create({
    data: {
      workspaceId,
      entropyScore,
      amendmentVelocity: amendments,
      overrideFrequency: overrides,
      governanceDrift
    }
  });
}
