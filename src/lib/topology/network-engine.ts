import { prisma } from "@/lib/prisma";

export const NetworkEngine = {
  getZones: async (workspaceId: string) => {
    return prisma.networkZone.findMany({
      where: { workspaceId }
    });
  }
};
