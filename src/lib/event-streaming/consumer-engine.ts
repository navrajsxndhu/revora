import { prisma } from "@/lib/prisma";

export const ConsumerEngine = {
  getConsumers: async (workspaceId: string) => {
    return prisma.eventConsumer.findMany({ where: { workspaceId } });
  }
};
