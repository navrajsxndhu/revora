import { prisma } from "@/lib/prisma";

export const DemandEngine = {
  getRequests: async (workspaceId: string) => {
    return prisma.demandRequest.findMany({
      where: { workspaceId }
    });
  }
};
