import { prisma } from "@/lib/prisma";

export const FailoverEngine = {
  getExecutions: async (workspaceId: string) => {
    return prisma.failoverExecution.findMany({
      where: { workspaceId }
    });
  }
};
