import { prisma } from '@/lib/prisma';

export async function enforceEnergyGovernance(workspaceId: string, region: string) {
  const energyStability = region === 'eu-central-1' ? 60.0 : 90.0;
  
  let deploymentRestrictionLevel = 'NONE';
  if (energyStability < 50) deploymentRestrictionLevel = 'BLOCKED';
  else if (energyStability < 75) deploymentRestrictionLevel = 'THROTTLED';

  return prisma.energyGovernanceProfile.create({
    data: {
      workspaceId,
      region,
      energyStability,
      deploymentRestrictionLevel,
      carbonAwarenessScore: 85.0
    }
  });
}
