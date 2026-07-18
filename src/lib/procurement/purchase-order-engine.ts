import { prisma } from "@/lib/prisma";

export const PurchaseOrderEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
