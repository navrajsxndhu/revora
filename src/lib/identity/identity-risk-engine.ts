import { prisma } from "@/lib/prisma";

export const IdentityRiskEngine = {
  getRisks: async (workspaceId: string) => {
    return prisma.identityRisk.findMany({
      where: { workspaceId }
    });
  }
};
