import { prisma } from "@/lib/prisma";

export const InfrastructureEngine = {
  getResources: async (workspaceId: string) => {
    return prisma.infrastructureResource.findMany({
      where: { workspaceId }
    });
  }
};
