import { prisma } from "@/lib/prisma";

export const EnterpriseConfigurationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
