import { prisma } from "@/lib/prisma";

export const ComplianceSimulator = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
