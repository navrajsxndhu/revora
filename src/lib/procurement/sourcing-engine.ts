import { prisma } from "@/lib/prisma";

export const SourcingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
