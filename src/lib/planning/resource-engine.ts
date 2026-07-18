import { prisma } from "@/lib/prisma";

export const ResourceEngine = {
  getResources: async (workspaceId: string) => {
    return prisma.capacityResource.findMany({
      where: { workspaceId }
    });
  }
};
