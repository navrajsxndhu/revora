import { prisma } from "@/lib/prisma";

export async function processOptimizations(workspaceId: string) {
  return await prisma.resourceOptimization.findMany({
    where: { workspaceId },
    orderBy: { priority: 'asc' }
  });
}
