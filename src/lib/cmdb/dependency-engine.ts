import { prisma } from "@/lib/prisma";

export async function processDependencies(workspaceId: string) {
  return await prisma.assetRelationship.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' }
  });
}
