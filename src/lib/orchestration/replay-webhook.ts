import { prisma } from "../prisma";

export async function snapshotFailedWebhook(
  workspaceId: string,
  provider: string,
  payload: unknown,
  headers: unknown,
  errorMessage: string
) {
  await prisma.webhookReplay.create({
    data: {
      workspaceId,
      provider,
      payload: JSON.stringify(payload),
      headers: JSON.stringify(headers),
      status: 'FAILED',
      errorMessage
    }
  });
}

export async function replayWebhook(webhookReplayId: string, userId: string) {
  const replay = await prisma.webhookReplay.findUnique({
    where: { id: webhookReplayId }
  });

  if (!replay) throw new Error("Webhook replay not found");
  if (replay.status === 'REPLAYED') throw new Error("Already replayed");

  // Mock re-injection into pipeline
  console.log(`[Webhook Replay] Re-injecting payload from ${replay.provider}`);

  await prisma.webhookReplay.update({
    where: { id: webhookReplayId },
    data: {
      status: 'REPLAYED',
      replayedAt: new Date()
    }
  });

  await prisma.auditLog.create({
    data: {
      workspaceId: replay.workspaceId,
      executionId: 'system',
      eventType: 'WEBHOOK_REPLAYED',
      status: 'SUCCESS',
      message: `Replayed webhook from ${replay.provider}`,
      actor: userId
    }
  });
}
