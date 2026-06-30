import { prisma } from '@/lib/prisma';
import { calculateTemporalDrift } from './temporal-drift';
import { trackCivilizationEvolution } from './civilization-evolution';
import { calculateTemporalCivilizationIndex } from './temporal-civilization-index';

export async function orchestrateTemporalResilience(workspaceId: string) {
  const drift = await calculateTemporalDrift(workspaceId);
  const evolution = await trackCivilizationEvolution(workspaceId);
  const civilization = await calculateTemporalCivilizationIndex(workspaceId, drift);

  return { drift, evolution, civilization };
}
