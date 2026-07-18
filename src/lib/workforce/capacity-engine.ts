import { prisma } from "@/lib/prisma";

export const CapacityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
