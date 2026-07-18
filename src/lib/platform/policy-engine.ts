import { prisma } from "@/lib/prisma";

export async function evaluatePolicy(workspaceId: string, resourceType: string) {
  return await prisma.resourcePolicy.findMany({
    where: { workspaceId, targetResource: resourceType }
  });
}
