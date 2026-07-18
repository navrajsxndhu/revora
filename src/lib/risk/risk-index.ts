import { prisma } from "@/lib/prisma";

export const RiskIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
