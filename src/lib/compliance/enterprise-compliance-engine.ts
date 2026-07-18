import { prisma } from "@/lib/prisma";

export const EnterpriseComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
