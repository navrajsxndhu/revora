import { prisma } from "@/lib/prisma";

export const RemediationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
