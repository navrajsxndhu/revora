import { prisma } from "@/lib/prisma";

export const ExecutiveBriefingEngine = {
  getBriefings: async (workspaceId: string) => {
    return prisma.executiveBriefing.findMany({
      where: { workspaceId }
    });
  }
};
