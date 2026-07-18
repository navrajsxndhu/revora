import { prisma } from "@/lib/prisma";

export const QueueEngine = {
  getQueues: async (workspaceId: string) => {
    return prisma.executionQueue.findMany({
      where: { workspaceId }
    });
  }
};
