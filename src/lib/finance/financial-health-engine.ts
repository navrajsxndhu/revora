import { prisma } from "@/lib/prisma";

export const FinancialHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
