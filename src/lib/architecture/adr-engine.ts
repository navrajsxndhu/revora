import { prisma } from "@/lib/prisma";

export const AdrEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
