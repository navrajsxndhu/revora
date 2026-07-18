import { prisma } from "@/lib/prisma";

export const RecordsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
