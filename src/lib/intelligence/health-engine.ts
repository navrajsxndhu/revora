import { prisma } from "@/lib/prisma";

export const HealthEngine = {
  getHealth: async (workspaceId: string) => {
    return prisma.enterpriseHealth.findMany({
      where: { workspaceId }
    });
  }
};
