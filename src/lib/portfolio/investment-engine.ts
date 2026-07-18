import { prisma } from "@/lib/prisma";

export const InvestmentEngine = {
  getInvestments: async (workspaceId: string) => {
    return prisma.investmentAllocation.findMany({
      where: { workspaceId }
    });
  }
};
