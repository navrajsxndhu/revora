import { prisma } from "@/lib/prisma";

export const ExplainabilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
