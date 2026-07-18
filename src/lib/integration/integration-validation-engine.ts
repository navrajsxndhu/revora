import { prisma } from "@/lib/prisma";

export const IntegrationValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
