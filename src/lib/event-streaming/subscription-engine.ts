import { prisma } from "@/lib/prisma";

export const SubscriptionEngine = {
  getSubscriptions: async (workspaceId: string) => {
    return prisma.eventSubscription.findMany({ where: { workspaceId } });
  }
};
