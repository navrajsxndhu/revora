import { prisma } from "@/lib/prisma";

export async function getReliabilityLedger(workspaceId: string) {
  return await prisma.errorBudgetLedger.findMany({
    take: 50,
    orderBy: { timestamp: 'desc' }
  });
}
