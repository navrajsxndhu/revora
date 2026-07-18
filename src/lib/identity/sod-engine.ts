import { prisma } from "@/lib/prisma";

export const SodEngine = {
  getRules: async (workspaceId: string) => {
    return prisma.separationOfDutyRule.findMany({
      where: { workspaceId }
    });
  }
};
