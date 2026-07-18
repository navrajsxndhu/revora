import { prisma } from "@/lib/prisma";

export const EnterpriseQualityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
