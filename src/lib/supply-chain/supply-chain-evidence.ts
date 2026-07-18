import { prisma } from "@/lib/prisma";

export const SupplyChainEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
