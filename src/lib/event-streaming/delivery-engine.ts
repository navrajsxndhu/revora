import { prisma } from "@/lib/prisma";

export const DeliveryEngine = {
  getPolicies: async (workspaceId: string) => {
    return prisma.deliveryPolicy.findMany({ where: { workspaceId } });
  }
};
