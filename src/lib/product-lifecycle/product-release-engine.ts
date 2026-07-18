import { prisma } from "@/lib/prisma";

export const ProductReleaseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
