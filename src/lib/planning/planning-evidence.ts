import { prisma } from "@/lib/prisma";

export const PlanningEvidence = {
  getEvidence: async (workspaceId: string) => {
    return prisma.planningEvidence.findMany({
      where: { workspaceId }
    });
  }
};
