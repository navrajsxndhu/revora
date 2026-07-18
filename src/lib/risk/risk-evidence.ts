import { prisma } from "@/lib/prisma";

export const RiskEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
