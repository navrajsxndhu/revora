import { prisma } from "@/lib/prisma";

export const ExecutionHealthEngine = {
  getHealth: async (workspaceId: string) => {
    return prisma.executionMetrics.findMany({
      where: { workspaceId }
    });
  }
};
