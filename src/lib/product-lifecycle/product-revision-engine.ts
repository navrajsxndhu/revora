import { prisma } from "@/lib/prisma";

export const ProductRevisionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
