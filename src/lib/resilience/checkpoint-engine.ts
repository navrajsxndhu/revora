import { prisma } from "@/lib/prisma";

export const CheckpointEngine = {
  getCheckpoints: async (workspaceId: string) => {
    return prisma.recoveryCheckpoint.findMany({
      where: { workspaceId }
    });
  }
};
