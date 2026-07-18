import { prisma } from "@/lib/prisma";

export const OrganizationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
