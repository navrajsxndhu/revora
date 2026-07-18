import { prisma } from "@/lib/prisma";

export const BenefitEngine = {
  getBenefits: async (workspaceId: string) => {
    return prisma.benefitRealization.findMany({
      where: { workspaceId }
    });
  }
};
