import { prisma } from "@/lib/prisma";

export const ArchitectureDependencyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
