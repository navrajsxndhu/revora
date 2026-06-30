import { prisma } from '@/lib/prisma';

export async function detectDeploymentCongestion(workspaceId: string) {
  const recentDeploys = await prisma.deployment.count({
    where: { 
      workspaceId,
      createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) } // Last hour
    }
  });

  let level = 'STABLE';
  if (recentDeploys > 50) level = 'SATURATED';
  else if (recentDeploys > 30) level = 'CONGESTED';
  else if (recentDeploys > 15) level = 'COMPRESSED';

  if (level !== 'STABLE') {
    await prisma.deploymentCongestionEvent.create({
      data: {
        workspaceId,
        congestionLevel: level,
        affectedServices: JSON.stringify(['global']),
        rolloutCompression: recentDeploys * 1.5,
        mitigationStrategy: `Detected ${level} state due to ${recentDeploys} deploys/hr. Throttling quotas.`
      }
    });
  }

  return level;
}
