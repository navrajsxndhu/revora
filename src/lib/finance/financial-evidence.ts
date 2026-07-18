import { prisma } from "@/lib/prisma";

export const FinancialEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
