import { prisma } from "@/lib/prisma";

export async function generateExecutionReplay(executionId: string) {
  const execution = await prisma.operationalExecution.findUnique({
    where: { id: executionId },
    include: { stages: true }
  });

  if (!execution) throw new Error("Execution not found");

  const duration = execution.completedAt 
    ? Math.floor((execution.completedAt.getTime() - execution.startedAt.getTime()) / 1000)
    : 0;

  return await prisma.executionReplay.create({
    data: {
      executionId,
      replayChecksum: `sha256_${Date.now()}_${executionId}`,
      replayDuration: duration
    }
  });
}
