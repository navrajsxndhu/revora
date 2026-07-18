import { prisma } from "@/lib/prisma";

export const RelationshipEngine = {
  getRelationships: async (workspaceId: string) => {
    return prisma.topologyEdge.findMany({
      where: { workspaceId }
    });
  }
};
