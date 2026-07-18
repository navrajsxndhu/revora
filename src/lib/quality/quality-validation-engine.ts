import { prisma } from "@/lib/prisma";

export const QualityValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
