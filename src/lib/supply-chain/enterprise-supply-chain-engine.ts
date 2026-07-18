import { prisma } from "@/lib/prisma";

export const EnterpriseSupplyChainEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
