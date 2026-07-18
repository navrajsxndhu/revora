import { prisma } from "@/lib/prisma";

export const AvailabilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
