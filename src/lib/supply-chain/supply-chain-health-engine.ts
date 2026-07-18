import { prisma } from "@/lib/prisma";

export const SupplyChainHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
