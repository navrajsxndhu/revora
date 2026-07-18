import { prisma } from "@/lib/prisma";

export const RevenueEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
