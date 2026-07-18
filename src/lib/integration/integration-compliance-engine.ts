import { prisma } from "@/lib/prisma";

export const IntegrationComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
