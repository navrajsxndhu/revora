import { prisma } from "@/lib/prisma";

export const ServiceMapEngine = {
  getServices: async (workspaceId: string) => {
    return prisma.businessService.findMany({
      where: { workspaceId }
    });
  }
};
