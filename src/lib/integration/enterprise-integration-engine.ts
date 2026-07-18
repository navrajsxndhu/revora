import { prisma } from "@/lib/prisma";

export const EnterpriseIntegrationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
