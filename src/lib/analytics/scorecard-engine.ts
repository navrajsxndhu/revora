import { prisma } from "@/lib/prisma";

export const ScorecardEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
