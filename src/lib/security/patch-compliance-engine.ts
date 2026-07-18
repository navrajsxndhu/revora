import { prisma } from "@/lib/prisma";

export const PatchComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
