import { prisma } from "@/lib/prisma";

export const AnalyticsValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
