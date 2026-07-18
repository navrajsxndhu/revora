import { prisma } from "@/lib/prisma";

export const NonconformanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
