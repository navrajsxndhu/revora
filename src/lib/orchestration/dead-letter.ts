import { prisma } from "../prisma";

export async function sendToDeadLetter(
  workspaceId: string, 
  incidentId: string, 
  recoveryActionId: string, 
  payload: unknown, 
  errorReason: string
) {
  // Move failed execution to Dead Letter Queue for manual review/replay
  await prisma.deadLetterExecution.create({
    data: {
      workspaceId,
      incidentId,
      recoveryActionId,
      payload: JSON.stringify(payload),
      errorReason,
      status: 'PENDING_REVIEW'
    }
  });

  // Audit the failure
  await prisma.auditLog.create({
    data: {
      workspaceId,
      executionId: 'system',
      eventType: 'DEAD_LETTER_ROUTED',
      status: 'FAILURE',
      message: `Recovery Action ${recoveryActionId} exhausted retries for Incident ${incidentId}. Moved to DLQ.`,
      actor: 'System'
    }
  });
}

export async function replayDeadLetter(deadLetterId: string, userId: string) {
  const dlqItem = await prisma.deadLetterExecution.findUnique({
    where: { id: deadLetterId }
  });

  if (!dlqItem) throw new Error("Dead letter not found");
  if (dlqItem.status === 'REPLAYED') throw new Error("Already replayed");

  // In real app, push back to BullMQ with `recoveryQueue.add(...)`
  // Mocking the replay here
  console.log(`[DLQ] Replaying action ${dlqItem.recoveryActionId} for Incident ${dlqItem.incidentId}`);

  await prisma.deadLetterExecution.update({
    where: { id: deadLetterId },
    data: { 
      status: 'REPLAYED',
      retryCount: { increment: 1 },
      resolvedAt: new Date()
    }
  });

  await prisma.auditLog.create({
    data: {
      workspaceId: dlqItem.workspaceId,
      executionId: 'system',
      eventType: 'DEAD_LETTER_REPLAYED',
      status: 'SUCCESS',
      message: `Replayed Dead Letter Action ${dlqItem.recoveryActionId}`,
      actor: userId
    }
  });
}
