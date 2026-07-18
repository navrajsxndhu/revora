import { prisma } from "@/lib/prisma";

export const CustomerHierarchyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
