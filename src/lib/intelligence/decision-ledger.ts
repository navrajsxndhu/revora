import { prisma } from "@/lib/prisma";

export const IntelligenceDecisionLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.decisionLedger.findMany({
      where: { workspaceId },
      orderBy: { timestamp: 'desc' },
      take: 100
    });
  }
};
