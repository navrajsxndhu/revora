import { prisma } from "@/lib/prisma";

export const DecisionGateEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
