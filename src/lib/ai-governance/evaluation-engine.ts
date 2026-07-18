import { prisma } from "@/lib/prisma";

export const EvaluationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
