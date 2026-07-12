import { prisma } from "@/lib/prisma";

export async function defineOperationalIntent(workspaceId: string, executionId: string, objective: string, expectedOutcome: string) {
  return await prisma.operationalIntent.create({
    data: {
      workspaceId,
      executionId,
      objective,
      expectedOutcome
    }
  });
}

export async function getOperationalIntent(executionId: string) {
  return await prisma.operationalIntent.findFirst({
    where: { executionId }
  });
}
