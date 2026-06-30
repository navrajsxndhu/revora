import { prisma } from "../prisma";

export async function executeReliabilitySimulation(workspaceId: string, serviceName: string, simulatedRisk: number, recommendation: string) {
  // Records a non-destructive simulation execution
  return await prisma.simulationExecution.create({
    data: {
      workspaceId,
      serviceName,
      simulatedRisk,
      recommendation
    }
  });
}
