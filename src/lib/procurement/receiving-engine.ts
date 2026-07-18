import { prisma } from "@/lib/prisma";

export const ReceivingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
