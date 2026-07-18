import { prisma } from "@/lib/prisma";

export const DependencyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
