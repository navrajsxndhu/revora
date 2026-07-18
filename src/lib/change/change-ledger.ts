import { prisma } from "@/lib/prisma";

export async function getChangeLedger(workspaceId: string) {
  return await prisma.operationalChange.findMany({
    where: { workspaceId, status: "EXECUTED" },
    orderBy: { createdAt: 'desc' }
  });
}
