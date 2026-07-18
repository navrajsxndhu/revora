import { prisma } from "@/lib/prisma";

export const RolloutEngine = {
  getRollouts: async (workspaceId: string) => {
    return prisma.progressiveRollout.findMany({ where: { workspaceId } });
  }
};
