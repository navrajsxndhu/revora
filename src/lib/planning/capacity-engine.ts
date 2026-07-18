import { prisma } from "@/lib/prisma";

export const CapacityEngine = {
  getCapacities: async (workspaceId: string) => {
    return prisma.enterpriseCapacity.findMany({
      where: { workspaceId }
    });
  }
};
