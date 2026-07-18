import { prisma } from "@/lib/prisma";

export const PrivacyComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
