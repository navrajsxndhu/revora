import { prisma } from "@/lib/prisma";

export const RoutingEngine = {
  getRoutes: async (workspaceId: string) => {
    return prisma.routingPolicy.findMany({ where: { workspaceId } });
  }
};
