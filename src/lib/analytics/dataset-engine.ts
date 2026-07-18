import { prisma } from "@/lib/prisma";

export const DatasetEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
