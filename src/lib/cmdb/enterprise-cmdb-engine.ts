import { prisma } from "@/lib/prisma";

export async function orchestrateCMDB(workspaceId: string) {
  return await prisma.configurationSnapshot.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 1
  });
}
