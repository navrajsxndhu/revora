import { prisma } from "@/lib/prisma";

export const ProcurementComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
