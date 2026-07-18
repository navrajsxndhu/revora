import { prisma } from "@/lib/prisma";

export const ArchiveEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
