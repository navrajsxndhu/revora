import { prisma } from "@/lib/prisma";

export const ReadinessEngine = {
  getReadiness: async (workspaceId: string) => {
    return prisma.recoveryReadiness.findMany({
      where: { workspaceId }
    });
  }
};
