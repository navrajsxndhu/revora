import { prisma } from "@/lib/prisma";

export async function orchestrateObservability(workspaceId: string) {
  return await prisma.observabilitySnapshot.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 1
  });
}
