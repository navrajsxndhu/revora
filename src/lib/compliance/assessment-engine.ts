import { prisma } from "@/lib/prisma";

export const AssessmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
