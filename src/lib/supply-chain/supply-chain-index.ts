import { prisma } from "@/lib/prisma";

export const SupplyChainIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
