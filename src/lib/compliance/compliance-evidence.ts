import { prisma } from "@/lib/prisma";

export const ComplianceEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
