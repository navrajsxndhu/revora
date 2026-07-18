import { prisma } from "@/lib/prisma";

export const OpportunityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
