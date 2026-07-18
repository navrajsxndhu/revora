import { prisma } from "@/lib/prisma";

export const ScenarioEngine = {
  getScenarios: async (workspaceId: string) => {
    return prisma.planningScenario.findMany({
      where: { workspaceId }
    });
  }
};
