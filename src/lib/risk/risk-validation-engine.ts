import { prisma } from "@/lib/prisma";

export const RiskValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
