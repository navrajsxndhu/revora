import { prisma } from "@/lib/prisma";

export const VendorLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
