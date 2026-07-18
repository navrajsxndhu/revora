import { prisma } from "@/lib/prisma";

export async function processConfigurationItems(workspaceId: string) {
  return await prisma.configurationItem.findMany({
    where: { workspaceId },
    orderBy: { updatedAt: 'desc' }
  });
}
