import { prisma } from "@/lib/prisma";

export const PortfolioEvidence = {
  getEvidence: async (workspaceId: string) => {
    return prisma.portfolioEvidence.findMany({
      where: { workspaceId }
    });
  }
};
