import { prisma } from "@/lib/prisma";

export const StrategicRiskEngine = {
  getRisks: async (workspaceId: string) => {
    return prisma.strategicRisk.findMany({
      where: { workspaceId }
    });
  }
};
