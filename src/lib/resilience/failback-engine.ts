import { prisma } from "@/lib/prisma";

export const FailbackEngine = {
  getPlans: async (workspaceId: string) => {
    return prisma.failbackPlan.findMany({
      where: { workspaceId }
    });
  }
};
