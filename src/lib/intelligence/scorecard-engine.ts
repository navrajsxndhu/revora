import { prisma } from "@/lib/prisma";

export const ScorecardEngine = {
  getScorecards: async (workspaceId: string) => {
    return prisma.departmentScorecard.findMany({
      where: { workspaceId }
    });
  }
};
