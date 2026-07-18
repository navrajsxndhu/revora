import { prisma } from "@/lib/prisma";

export const CarbonAccountingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
