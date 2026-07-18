import { prisma } from "@/lib/prisma";

export const PlanningLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.planningLedger.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
  }
};

export async function recordOperationalPlan(workspaceId: string, name: string, goal: string, score: number, milestones: any, dependencies: any) {
  return { id: "legacy-plan-1", name, goal, score, milestones, dependencies };
}

