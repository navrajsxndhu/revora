import { prisma } from '@/lib/prisma';
import { calculateGovernanceEntropy } from './governance-entropy';
import { calculateCivilizationIndex } from './civilization-index';
import { archiveInstitutionalMemory } from './institutional-memory';

export async function orchestrateOperationalContinuity(workspaceId: string) {
  // 1. Measure entropy (degradation)
  const entropy = await calculateGovernanceEntropy(workspaceId);

  // 2. Archive critical structural memory
  await archiveInstitutionalMemory(workspaceId);

  // 3. Update the civilization index (the grand survivability score)
  const civilization = await calculateCivilizationIndex(workspaceId, entropy);

  return { entropy, civilization };
}
