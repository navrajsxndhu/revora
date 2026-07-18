import { prisma } from "@/lib/prisma";

export const DepreciationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
