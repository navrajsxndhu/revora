import { prisma } from "@/lib/prisma";

export const ProductivityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
