import { prisma } from "../prisma";
import crypto from 'crypto';

export async function publishFederatedEvent(workspaceId: string, originRegion: string, eventType: string, payload: any) {
  const payloadStr = JSON.stringify(payload);
  // Mock crypto signature for Phase 94 prototype
  const signature = crypto.createHash('sha256').update(`${workspaceId}:${originRegion}:${eventType}:${payloadStr}`).digest('hex');

  const event = await prisma.federatedEvent.create({
    data: {
      workspaceId,
      originRegion,
      eventType,
      payload: payloadStr,
      signature
    }
  });

  return event;
}

export async function fetchFederatedEvents(workspaceId: string) {
  return await prisma.federatedEvent.findMany({
    where: { workspaceId },
    orderBy: { timestamp: 'desc' },
    take: 50
  });
}
