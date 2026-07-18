import { prisma } from "@/lib/prisma";

export const TransferEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
