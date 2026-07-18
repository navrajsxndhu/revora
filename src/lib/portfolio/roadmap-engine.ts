import { prisma } from "@/lib/prisma";

export const RoadmapEngine = {
  getRoadmaps: async (workspaceId: string) => {
    return prisma.executiveRoadmap.findMany({
      where: { workspaceId }
    });
  }
};
