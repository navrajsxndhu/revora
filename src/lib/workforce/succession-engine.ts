import { prisma } from "@/lib/prisma";

export const SuccessionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
