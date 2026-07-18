import { prisma } from "@/lib/prisma";

export const EmissionsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
