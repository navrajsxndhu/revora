import { prisma } from "@/lib/prisma";

export const SalesPipelineEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
