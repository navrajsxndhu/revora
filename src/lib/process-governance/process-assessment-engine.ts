import { prisma } from "@/lib/prisma";

export const ProcessAssessmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
