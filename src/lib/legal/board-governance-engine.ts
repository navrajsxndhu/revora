import { prisma } from "@/lib/prisma";

export const BoardGovernanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
