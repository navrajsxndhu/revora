import { prisma } from "@/lib/prisma";

export const CollaborationChannelEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
