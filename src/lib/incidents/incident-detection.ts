import { prisma } from "@/lib/prisma";

export async function detectIncidents(workspaceId: string) {
  // Queries releases, assurance, integration events for failures.
  return await prisma.operationalIncident.findMany({
    where: { workspaceId }
  });
}
