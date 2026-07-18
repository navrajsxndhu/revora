import { prisma } from "@/lib/prisma";

export const CheckpointEngine = {
  getCheckpoints: async (workspaceId: string) => {
    return prisma.simulationCheckpoint.findMany({
      where: { workspaceId }
    });
  }
};
