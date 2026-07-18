import { prisma } from "@/lib/prisma";

export const FinancialLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
