import { prisma } from "@/lib/prisma";
import { MilestoneDef, DependencyDef } from "./dependency-planning";

export async function recordOperationalPlan(
  workspaceId: string,
  planName: string,
  objectiveName: string,
  optimizationScore: number,
  milestones: MilestoneDef[],
  dependencies: DependencyDef[]
) {
  return await prisma.operationalPlan.create({
    data: {
      workspaceId,
      planName,
      planningObjective: objectiveName,
      planningScore: optimizationScore,
      status: "DRAFT",
      milestones: {
        create: milestones.map(m => ({
          milestoneName: m.name,
          executionOrder: m.executionOrder,
          completionStatus: "PENDING"
        }))
      }
    },
    include: {
      milestones: true,
      dependencies: true,
      simulations: true
    }
  });
  // Note: For simplicity in this mock, we map dependencies in a separate step or assume the engine wires the IDs.
}

export async function getPlanningLedger(workspaceId: string) {
  return await prisma.operationalPlan.findMany({
    where: { workspaceId },
    include: {
      milestones: true,
      dependencies: true,
      simulations: true
    },
    orderBy: { createdAt: 'desc' }
  });
}
