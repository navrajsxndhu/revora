import { prisma } from "@/lib/prisma";

export const MilestoneEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
