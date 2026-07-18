import { prisma } from "@/lib/prisma";

export const ProcessingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
