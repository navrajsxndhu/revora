import { prisma } from "@/lib/prisma";

export const CommunityImpactEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
