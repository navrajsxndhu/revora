import { prisma } from "@/lib/prisma";

export const ContinuityLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.continuityLedger.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 100
    });
  }
};
