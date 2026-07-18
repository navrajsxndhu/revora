import { prisma } from "@/lib/prisma";

export const IntegrationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
