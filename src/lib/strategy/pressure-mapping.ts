import { prisma } from '@/lib/prisma';

export async function mapOrganizationalPressure(workspaceId: string) {
  // Aggregate data by region. We mock regions here.
  const regions = ['us-east-1', 'eu-west-1', 'ap-southeast-2'];

  for (const region of regions) {
    const recentIncidents = await prisma.incident.count({
      where: { 
        workspaceId, 
        createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } 
      }
    });

    const pressureScore = recentIncidents * 1.5;
    const instabilityDensity = recentIncidents > 5 ? 0.8 : 0.2;
    const deploymentCongestion = recentIncidents > 10 ? 'CONGESTED' : 'STABLE';

    await prisma.organizationalPressureZone.upsert({
      where: { workspaceId_region: { workspaceId, region } },
      create: {
        workspaceId,
        region,
        pressureScore,
        instabilityDensity,
        deploymentCongestion,
        debtConcentration: pressureScore * 0.5
      },
      update: {
        pressureScore,
        instabilityDensity,
        deploymentCongestion,
        debtConcentration: pressureScore * 0.5
      }
    });
  }
}
