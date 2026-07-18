import { prisma } from "@/lib/prisma";

export const BusinessContinuityEngine = {
  getPlans: async (workspaceId: string) => {
    return prisma.businessContinuityPlan.findMany({
      where: { workspaceId }
    });
  }
};
