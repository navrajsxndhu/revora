import { prisma } from "@/lib/prisma";

export const RiskHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
