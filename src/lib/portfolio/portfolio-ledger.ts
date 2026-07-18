import { prisma } from "@/lib/prisma";

export const PortfolioLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.portfolioLedger.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
  }
};
