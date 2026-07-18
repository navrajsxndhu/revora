import { prisma } from "@/lib/prisma";

export const ServiceSimulator = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
