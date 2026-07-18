import { prisma } from "@/lib/prisma";

export const ProducerEngine = {
  getProducers: async (workspaceId: string) => {
    return prisma.eventProducer.findMany({ where: { workspaceId } });
  }
};
