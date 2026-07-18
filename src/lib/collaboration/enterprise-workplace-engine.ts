import { prisma } from "@/lib/prisma";

export const EnterpriseWorkplaceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
