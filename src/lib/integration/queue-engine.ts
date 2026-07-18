import { prisma } from "@/lib/prisma";

export const QueueEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
