import { prisma } from "@/lib/prisma";

export const HealthEngine = {
  getIndicators: async (workspaceId: string) => {
    return prisma.healthIndicator.findMany({ where: { workspaceId } });
  }
};
