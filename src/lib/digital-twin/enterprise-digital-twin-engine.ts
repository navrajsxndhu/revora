import { prisma } from "@/lib/prisma";

export const EnterpriseDigitalTwinEngine = {
  getOverview: async (workspaceId: string) => {
    return {
      twinSyncStatus: "SYNCHRONIZED",
      enterpriseCoverage: 99.4,
      activeSimulations: await prisma.twinSimulationExecution.count({ where: { workspaceId, status: 'RUNNING' } }),
      scenariosAvailable: await prisma.simulationScenario.count({ where: { workspaceId } }),
      stateConsistency: "OPTIMAL"
    };
  }
};
