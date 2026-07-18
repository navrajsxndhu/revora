import { prisma } from "@/lib/prisma";

export const ProposalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
