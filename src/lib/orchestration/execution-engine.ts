import { prisma } from "@/lib/prisma";

export const ExecutionEngine = {
  getExecutions: async (workspaceId: string) => {
    return prisma.executionPlan.findMany({
      where: { workspaceId }
    });
  }
};
