import { prisma } from "@/lib/prisma";

export const ArchitecturePrincipleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
