import { prisma } from "@/lib/prisma";

export const TechnicalDebtEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
