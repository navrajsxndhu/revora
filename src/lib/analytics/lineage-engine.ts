import { prisma } from "@/lib/prisma";

export const LineageEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
