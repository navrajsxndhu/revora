import { prisma } from "@/lib/prisma";

export const ScenarioEngine = {
  getScenarios: async (workspaceId: string) => {
    return prisma.simulationScenario.findMany({
      where: { workspaceId }
    });
  }
};
