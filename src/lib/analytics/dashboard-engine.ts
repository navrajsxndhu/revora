import { prisma } from "@/lib/prisma";

export const DashboardEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
