import { prisma } from "@/lib/prisma";

export const RiskLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
