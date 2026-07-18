import { prisma } from "@/lib/prisma";

export const StandardsComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
