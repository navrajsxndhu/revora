import { prisma } from "@/lib/prisma";

export const CollaborationHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
