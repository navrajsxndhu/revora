import { prisma } from "@/lib/prisma";

export const ArchitectureHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
