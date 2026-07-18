import { prisma } from "@/lib/prisma";

export const SubscriptionEngine = {
  getSubscriptions: async (workspaceId: string) => {
    return prisma.apiSubscription.findMany({ where: { workspaceId } });
  }
};
