import { prisma } from "@/lib/prisma";

export const AllocationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
