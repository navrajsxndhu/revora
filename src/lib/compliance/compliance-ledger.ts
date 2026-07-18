import { prisma } from "@/lib/prisma";

export const ComplianceLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
