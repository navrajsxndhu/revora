import { prisma } from "@/lib/prisma";

export const CommercialLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
