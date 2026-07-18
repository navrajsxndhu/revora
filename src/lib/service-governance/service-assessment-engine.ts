import { prisma } from "@/lib/prisma";

export const ServiceAssessmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
