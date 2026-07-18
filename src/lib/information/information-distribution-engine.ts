import { prisma } from "@/lib/prisma";

export const InformationDistributionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
