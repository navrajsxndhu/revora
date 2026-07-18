import { prisma } from "@/lib/prisma";

export const AnalyticsHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
