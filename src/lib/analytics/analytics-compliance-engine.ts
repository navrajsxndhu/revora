import { prisma } from "@/lib/prisma";

export const AnalyticsComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
