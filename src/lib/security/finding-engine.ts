import { prisma } from "@/lib/prisma";

export async function processFindings(workspaceId: string) {
  return await prisma.securityFinding.findMany({
    where: { workspaceId },
    orderBy: { detectionTimestamp: 'desc' }
  });
}
