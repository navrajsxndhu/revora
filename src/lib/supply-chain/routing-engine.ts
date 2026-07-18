import { prisma } from "@/lib/prisma";

export const RoutingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
