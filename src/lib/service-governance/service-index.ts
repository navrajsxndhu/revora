import { prisma } from "@/lib/prisma";

export const ServiceIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
