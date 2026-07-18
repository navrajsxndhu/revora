import { prisma } from "@/lib/prisma";

export const ProductComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
