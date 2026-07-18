import { prisma } from "@/lib/prisma";

export const IdentityLedger = {
  getHistory: async (workspaceId: string) => {
    return prisma.identityLedger.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 100
    });
  }
};
