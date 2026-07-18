import { prisma } from "@/lib/prisma";

export const AnalyticsLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
