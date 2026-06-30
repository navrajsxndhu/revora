import { prisma } from "../prisma";
import { publishFederatedEvent } from "./federation-engine";
import { getActiveMigrations } from "../nervous-system/load-migration";

export async function executeGlobalRollback(workspaceId: string, serviceName: string, deploymentId: string) {
  const regions = ["us-east-1", "eu-west-1", "ap-south-1"];

  const migrations = await getActiveMigrations(workspaceId);
  const activeTargets = migrations.map(m => m.targetRegion);
  const safeRegions = regions.filter(r => !activeTargets.includes(r)); // exclude regions being migrated to

  const rollback = await prisma.rollbackExecution.create({
    data: {
      workspaceId,
      serviceName,
      deploymentId,
      targetRegions: JSON.stringify(safeRegions),
      status: "EXECUTING"
    }
  });

  await publishFederatedEvent(workspaceId, "us-east-1", "ROLLBACK_INITIATED", {
    serviceName,
    deploymentId,
    regions
  });

  return rollback;
}

export async function getActiveRollbacks(workspaceId: string) {
  return await prisma.rollbackExecution.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 10
  });
}
