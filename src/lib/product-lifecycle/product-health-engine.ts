import { prisma } from "@/lib/prisma";

export const ProductHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
