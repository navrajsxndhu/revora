import { prisma } from "@/lib/prisma";

export async function getProvisioningLedger(workspaceId: string) {
  return await prisma.provisioningRequest.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' }
  });
}
