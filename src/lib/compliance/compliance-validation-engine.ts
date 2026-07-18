import { prisma } from "@/lib/prisma";

export const ComplianceValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
