import { prisma } from "@/lib/prisma";

export const SalesOrganizationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
