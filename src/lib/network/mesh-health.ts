import { prisma } from "../prisma";

export async function getMeshStatus(workspaceId: string) {
  const coordinators = await prisma.regionalCoordinator.findMany({
    where: { workspaceId }
  });

  return coordinators.map(c => ({
    region: c.region,
    endpoint: c.endpoint,
    status: c.status,
    lastPing: c.lastPing
  }));
}
