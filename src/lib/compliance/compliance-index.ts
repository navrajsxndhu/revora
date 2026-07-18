import { prisma } from "@/lib/prisma";

export const ComplianceIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
