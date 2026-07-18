import { prisma } from "@/lib/prisma";

export async function processTopology(workspaceId: string) {
  return await prisma.serviceTopology.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' }
  });
}
