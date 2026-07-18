import { prisma } from "@/lib/prisma";

export async function calculateErrorBudget(sloId: string) {
  return await prisma.errorBudgetLedger.findFirst({
    where: { sloId },
    orderBy: { timestamp: 'desc' }
  });
}
