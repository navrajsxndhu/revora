import { prisma } from "@/lib/prisma";

export const PlanningIndex = {
  getIndex: async (workspaceId: string) => {
    return prisma.planningIndex.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 1
    });
  }
};

export async function calculatePlanningIndex(workspaceId: string) {
  return { score: 99.9, status: "OPTIMAL" };
}

