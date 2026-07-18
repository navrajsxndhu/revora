import { prisma } from "@/lib/prisma";

export const ArchitectureIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
