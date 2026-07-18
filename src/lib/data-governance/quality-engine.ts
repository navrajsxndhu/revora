import { prisma } from "@/lib/prisma";

export const QualityEngine = {
  getQualityRules: async (workspaceId: string) => {
    return prisma.dataQualityRule.findMany({ where: { workspaceId } });
  }
};
