import { prisma } from "@/lib/prisma";

export const ServicePerformanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
