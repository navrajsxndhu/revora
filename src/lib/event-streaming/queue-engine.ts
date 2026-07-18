import { prisma } from "@/lib/prisma";

export const QueueEngine = {
  getQueues: async (workspaceId: string) => {
    return prisma.eventQueue.findMany({ where: { workspaceId } });
  }
};
