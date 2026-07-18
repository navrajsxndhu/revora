import { prisma } from "@/lib/prisma";

export const SloEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
