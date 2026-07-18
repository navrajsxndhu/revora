import { prisma } from "@/lib/prisma";

export const CostCenterEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
