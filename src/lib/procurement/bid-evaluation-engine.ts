import { prisma } from "@/lib/prisma";

export const BidEvaluationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
