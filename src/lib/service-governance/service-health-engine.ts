import { prisma } from "@/lib/prisma";

export const ServiceHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
