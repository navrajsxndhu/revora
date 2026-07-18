import { prisma } from "@/lib/prisma";

export const CustomerLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
