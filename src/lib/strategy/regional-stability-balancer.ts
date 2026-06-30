import { prisma } from '@/lib/prisma';

export async function balanceRegionalStability(workspaceId: string) {
  const zones = await prisma.organizationalPressureZone.findMany({ where: { workspaceId } });

  for (const zone of zones) {
    if (zone.deploymentCongestion === 'SATURATED') {
      await prisma.deploymentCongestionEvent.create({
        data: {
          workspaceId,
          congestionLevel: 'SATURATED',
          affectedServices: JSON.stringify(['*']),
          rolloutCompression: 100.0,
          mitigationStrategy: `Regional Freeze enacted in ${zone.region} to balance stability.`
        }
      });
    }
  }
}
