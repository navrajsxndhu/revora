import { prisma } from "@/lib/prisma";

export const CrisisEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
