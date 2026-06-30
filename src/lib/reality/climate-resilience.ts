import { prisma } from '@/lib/prisma';

export async function createClimateExposureZone(workspaceId: string, region: string) {
  const riskType = region === 'us-west-1' ? 'WILDFIRE' : 'FLOOD';
  const resilienceScore = riskType === 'WILDFIRE' ? 65.0 : 80.0;

  return prisma.climateExposureZone.create({
    data: {
      workspaceId,
      region,
      climateRiskType: riskType,
      resilienceScore,
      infrastructureExposure: 40.0
    }
  });
}
