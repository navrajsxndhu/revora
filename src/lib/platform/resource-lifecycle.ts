import { prisma } from "@/lib/prisma";

export async function getResourceLifecycle(workspaceId: string) {
  return await prisma.platformResource.groupBy({
    by: ['id'], // fixed
    where: { workspaceId },
    _count: { id: true }
  });
}
