import { prisma } from "@/lib/prisma";

export const ProductLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
