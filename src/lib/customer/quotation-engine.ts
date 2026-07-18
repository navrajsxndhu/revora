import { prisma } from "@/lib/prisma";

export const QuotationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
