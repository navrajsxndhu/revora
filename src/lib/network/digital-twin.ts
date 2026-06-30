import { prisma } from "../prisma";
import { buildLiveTopology } from "../os/topology-engine";

export async function snapshotDigitalTwin(workspaceId: string) {
  const topology = await buildLiveTopology(workspaceId);
  const snapshotStr = JSON.stringify(topology);
  
  return await prisma.digitalTwinState.create({
    data: {
      workspaceId,
      snapshot: snapshotStr
    }
  });
}

export async function getLatestTwin(workspaceId: string) {
  const twin = await prisma.digitalTwinState.findFirst({
    where: { workspaceId },
    orderBy: { timestamp: 'desc' }
  });
  if (!twin) return null;
  return JSON.parse(twin.snapshot);
}
