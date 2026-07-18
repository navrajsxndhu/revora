import { prisma } from "@/lib/prisma";

export const RecoveryEngine = {
  getRecoveries: async (workspaceId: string) => {
    return prisma.phase134RecoveryScenario.findMany({
      where: { workspaceId }
    });
  }
};
