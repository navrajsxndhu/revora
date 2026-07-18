import { prisma } from "@/lib/prisma";

export const ConfigurationAssessmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
