import { prisma } from "../prisma";

export async function applyConfidenceDecay(workspaceId: string) {
  // A 7-day half life for confidence scores.
  // This ensures that if a policy was tightened due to a bad incident,
  // it naturally relaxes if the service remains stable for a long time.
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const oldEvents = await prisma.governanceLearningEvent.findMany({
    where: { 
      workspaceId,
      createdAt: { lt: sevenDaysAgo },
      confidenceScore: { gt: 0.1 }
    }
  });

  for (const event of oldEvents) {
    const decayedScore = event.confidenceScore * 0.5; // Half-life decay
    await prisma.governanceLearningEvent.update({
      where: { id: event.id },
      data: { confidenceScore: decayedScore }
    });
  }
}
