import { prisma } from "@/lib/prisma";

export const PiaEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
