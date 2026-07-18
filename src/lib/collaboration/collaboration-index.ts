import { prisma } from "@/lib/prisma";

export const CollaborationIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
