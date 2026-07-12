import { prisma } from "@/lib/prisma";
import { OptimizationCandidateDef } from "./optimization-solver";
import { OptimizationConstraint } from "./constraint-optimization";

export async function recordOptimization(
  workspaceId: string, 
  objectiveName: string, 
  winningConfiguration: string, 
  winningScore: number,
  constraints: OptimizationConstraint[],
  candidates: OptimizationCandidateDef[]
) {
  return await prisma.operationalOptimization.create({
    data: {
      workspaceId,
      optimizationObjective: objectiveName,
      optimizationScore: winningScore,
      selectedConfiguration: winningConfiguration,
      constraints: {
        create: constraints.map(c => ({
          constraintType: c.constraintType,
          mathematicalLimit: c.mathematicalLimit,
          sourceReference: c.sourceReference
        }))
      },
      candidates: {
        create: candidates.map(c => ({
          candidateName: c.candidateName,
          objectiveScore: c.objectiveScore,
          survivabilityImpact: c.survivabilityImpact,
          constitutionalCompliance: c.constitutionalCompliance,
          ranking: c.ranking
        }))
      }
    },
    include: {
      constraints: true,
      candidates: true
    }
  });
}

export async function getOptimizationLedger(workspaceId: string) {
  return await prisma.operationalOptimization.findMany({
    where: { workspaceId },
    include: {
      constraints: true,
      candidates: true,
      simulations: true
    },
    orderBy: { createdAt: 'desc' }
  });
}
