import { prisma } from "@/lib/prisma";

export const AssetLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
