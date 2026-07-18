import { prisma } from "@/lib/prisma";

export const AllocationEngine = {
  getAllocations: async (workspaceId: string) => {
    return prisma.capacityAllocation.findMany({
      where: { workspaceId }
    });
  }
};
