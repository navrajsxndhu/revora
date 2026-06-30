import { prisma } from '@/lib/prisma';

export async function validateGovernanceLegality(workspaceId: string) {
  const allocations = await prisma.reliabilityCapitalAllocation.findMany({
    where: { workspaceId }
  });

  for (const alloc of allocations) {
    if (alloc.governancePriority === 'FROZEN') {
      const recentDeploy = await prisma.deployment.findFirst({
        where: {
          workspaceId,
          serviceName: alloc.service,
          createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } // Last 24hrs
        }
      });

      if (recentDeploy) {
        await prisma.constitutionalViolation.create({
          data: {
            workspaceId,
            service: alloc.service,
            violationType: 'FROZEN_DEPLOYMENT_BYPASS',
            severity: 'CRITICAL_BREACH',
            operationalImpact: 'Bypassed active constitutional freeze window',
            governanceContext: `Service ${alloc.service} deployed despite FROZEN status.`
          }
        });
      }
    }
  }

  return { status: 'VALIDATED' };
}
