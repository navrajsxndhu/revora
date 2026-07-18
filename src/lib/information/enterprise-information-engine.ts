import { prisma } from "@/lib/prisma";

export const EnterpriseInformationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
