import { prisma } from "@/lib/prisma";

export const VendorIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
