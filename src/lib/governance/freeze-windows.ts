import { prisma } from "../prisma";
import { evaluateGlobalFreezeConsensus } from "../network/consensus-engine";

export async function checkFreezeState(workspaceId: string, serviceName: string) {
  const gov = await prisma.serviceGovernance.findUnique({
    where: { workspaceId_serviceName: { workspaceId, serviceName } }
  });

  if (!gov) return { active: false, reason: null };
  return { active: gov.deploymentFreezeActive, reason: gov.freezeReason };
}

export async function enforceFreeze(workspaceId: string, serviceName: string, reason: string, actor: string = 'SYSTEM') {
  await prisma.serviceGovernance.upsert({
    where: { workspaceId_serviceName: { workspaceId, serviceName } },
    create: { 
      workspaceId, 
      serviceName, 
      deploymentFreezeActive: true, 
      freezeReason: reason,
      rolloutRestrictionLevel: 'FROZEN'
    },
    update: { 
      deploymentFreezeActive: true, 
      freezeReason: reason,
      rolloutRestrictionLevel: 'FROZEN'
    }
  });

  await prisma.governanceEvent.create({
    data: {
      workspaceId,
      serviceName,
      actionType: 'FREEZE_APPLIED',
      reasoning: reason,
      actor
    }
  });

  await evaluateGlobalFreezeConsensus(workspaceId, serviceName);
}
