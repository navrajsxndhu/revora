import { prisma } from "@/lib/prisma";

export const VendorSelectionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
