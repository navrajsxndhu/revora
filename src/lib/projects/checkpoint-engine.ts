import { prisma } from "@/lib/prisma";

export const CheckpointEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
