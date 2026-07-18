import { prisma } from "@/lib/prisma";

export const AnalyticsAuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
