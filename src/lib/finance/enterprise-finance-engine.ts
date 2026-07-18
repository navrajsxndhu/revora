import { prisma } from "@/lib/prisma";

export const EnterpriseFinanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
