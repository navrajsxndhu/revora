import { prisma } from "@/lib/prisma";

export const SupplyChainLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
