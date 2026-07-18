import { prisma } from "@/lib/prisma";

export async function processCosts(workspaceId: string) {
  return await prisma.cloudCostRecord.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' }
  });
}
