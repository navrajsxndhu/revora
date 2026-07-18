import { prisma } from "@/lib/prisma";

export const ProductEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
