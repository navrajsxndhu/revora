import { prisma } from "@/lib/prisma";

export const ExecutionLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.executionLedger.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 100
    });
  }
};
