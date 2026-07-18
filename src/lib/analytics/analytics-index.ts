import { prisma } from "@/lib/prisma";

export const AnalyticsIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
