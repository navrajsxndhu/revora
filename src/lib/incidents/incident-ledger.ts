import { prisma } from "@/lib/prisma";

export async function getIncidentLedger(workspaceId: string) {
  // Immutable ledger for organizational incidents
  return await prisma.operationalIncident.findMany({
    where: { workspaceId, status: "RESOLVED" },
    orderBy: { startTime: 'desc' }
  });
}
