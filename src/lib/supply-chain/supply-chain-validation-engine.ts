import { prisma } from "@/lib/prisma";

export const SupplyChainValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
