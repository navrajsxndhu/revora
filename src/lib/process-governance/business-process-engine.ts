import { prisma } from "@/lib/prisma";

export const BusinessProcessEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
