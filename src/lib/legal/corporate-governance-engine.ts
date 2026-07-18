import { prisma } from "@/lib/prisma";

export const CorporateGovernanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
