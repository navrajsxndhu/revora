import { prisma } from "@/lib/prisma";

export async function processBudgets(workspaceId: string) {
  return await prisma.budgetPolicy.findMany({
    where: { workspaceId },
    orderBy: { updatedAt: 'desc' }
  });
}
