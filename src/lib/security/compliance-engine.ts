import { prisma } from "@/lib/prisma";

export async function processCompliance(workspaceId: string) {
  return await prisma.complianceControl.findMany({
    where: { workspaceId },
    orderBy: { updatedAt: 'desc' }
  });
}
