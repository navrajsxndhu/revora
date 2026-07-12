import { prisma } from "@/lib/prisma";
import { NormalizedIntegrationEvent } from "./data-normalization";
import { SynchronizationResult } from "./event-synchronization";

export async function recordIntegrationEvents(
  workspaceId: string,
  connectorId: string,
  normalizedEvents: NormalizedIntegrationEvent[],
  syncResults: SynchronizationResult[]
) {
  // Maintains immutable synchronization history. Append-only.
  const syncMap = new Map(syncResults.map(s => [s.eventId, s]));

  for (const event of normalizedEvents) {
    const sync = syncMap.get(event.externalId);
    
    await prisma.integrationEvent.create({
      data: {
        workspaceId,
        connectorId,
        eventType: event.eventType,
        externalId: event.externalId,
        payloadHash: event.payloadHash,
        validationState: event.validationState,
        synchronization: sync ? {
          create: {
            workspaceId,
            targetSubsystem: sync.targetSubsystem,
            synchronizationStatus: sync.synchronizationStatus
          }
        } : undefined
      }
    });
  }
}

export async function getIntegrationLedger(workspaceId: string) {
  return await prisma.integrationEvent.findMany({
    where: { workspaceId },
    include: {
      connector: true,
      synchronization: true
    },
    orderBy: { createdAt: 'desc' },
    take: 50
  });
}
