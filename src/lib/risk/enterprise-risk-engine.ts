import { prisma } from "@/lib/prisma";

export const EnterpriseRiskEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
