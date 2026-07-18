import { prisma } from "@/lib/prisma";

export const CollaborationPlatformEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
