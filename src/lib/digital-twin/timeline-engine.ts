import { prisma } from "@/lib/prisma";

export const TimelineEngine = {
  getTimeline: async (workspaceId: string) => {
    return prisma.stateTransition.findMany({
      where: { workspaceId }
    });
  }
};
