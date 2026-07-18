import { prisma } from "@/lib/prisma";

export async function processPolicies(workspaceId: string) {
  return await prisma.securityPolicy.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' }
  });
}
