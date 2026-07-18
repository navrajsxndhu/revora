import { prisma } from "@/lib/prisma";

export const UtilizationEngine = {
  getUtilization: async (workspaceId: string) => {
    return prisma.capacityUtilization.findMany({
      where: { workspaceId }
    });
  }
};
