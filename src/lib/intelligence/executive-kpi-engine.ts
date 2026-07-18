import { prisma } from "@/lib/prisma";

export const ExecutiveKPIEngine = {
  getKPIs: async (workspaceId: string) => {
    return prisma.executiveKPI.findMany({
      where: { workspaceId }
    });
  }
};
