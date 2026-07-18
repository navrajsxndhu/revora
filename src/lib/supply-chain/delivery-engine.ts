import { prisma } from "@/lib/prisma";

export const DeliveryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
