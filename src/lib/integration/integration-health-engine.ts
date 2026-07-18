import { prisma } from "@/lib/prisma";

export const IntegrationHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
