import { prisma } from "@/lib/prisma";

export const CustomerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
