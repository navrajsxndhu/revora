import { prisma } from "@/lib/prisma";

export const FailureEngine = {
  getFailures: async (workspaceId: string) => {
    return prisma.failureScenario.findMany({
      where: { workspaceId }
    });
  }
};
