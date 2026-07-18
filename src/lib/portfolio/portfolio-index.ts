import { prisma } from "@/lib/prisma";

export const PortfolioIndex = {
  getIndex: async (workspaceId: string) => {
    return prisma.portfolioIndex.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 1
    });
  }
};
