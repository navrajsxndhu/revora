import { prisma } from "@/lib/prisma";

export const DigitalTwinHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return prisma.twinHealth.findMany({
      where: { workspaceId }
    });
  }
};
