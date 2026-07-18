import { prisma } from "@/lib/prisma";

export const SecurityLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
