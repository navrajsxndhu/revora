import { prisma } from "@/lib/prisma";

export const VendorEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
