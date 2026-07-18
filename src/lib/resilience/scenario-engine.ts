import { prisma } from "@/lib/prisma";

export const ScenarioEngine = {
  getScenarios: async (workspaceId: string) => {
    return prisma.phase134RecoveryScenario.findMany({
      where: { workspaceId }
    });
  }
};
