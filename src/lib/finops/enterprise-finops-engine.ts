import { prisma } from "@/lib/prisma";

export async function orchestrateFinOps(workspaceId: string) {
  return await prisma.finOpsSnapshot.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 1
  });
}
