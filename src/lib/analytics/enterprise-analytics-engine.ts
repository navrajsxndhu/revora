import { prisma } from "@/lib/prisma";

export const EnterpriseAnalyticsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
