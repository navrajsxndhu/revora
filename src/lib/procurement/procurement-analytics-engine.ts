import { prisma } from "@/lib/prisma";

export const ProcurementAnalyticsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
