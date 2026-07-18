import { prisma } from "@/lib/prisma";

export const ContinuousImprovementEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
