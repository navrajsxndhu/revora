import { prisma } from "@/lib/prisma";

export const DocumentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
