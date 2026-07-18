import { prisma } from "@/lib/prisma";

export const SimulationEngine = {
  getSimulations: async (workspaceId: string) => {
    return prisma.twinSimulationExecution.findMany({
      where: { workspaceId }
    });
  }
};
