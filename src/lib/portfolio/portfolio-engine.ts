import { prisma } from "@/lib/prisma";

export const PortfolioEngine = {
  getPortfolios: async (workspaceId: string) => {
    return prisma.enterprisePortfolio.findMany({
      where: { workspaceId }
    });
  }
};
