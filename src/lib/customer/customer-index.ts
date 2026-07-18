import { prisma } from "@/lib/prisma";

export const CustomerIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
