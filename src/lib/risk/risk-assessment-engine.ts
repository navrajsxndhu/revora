import { prisma } from "@/lib/prisma";

export const RiskAssessmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
