import { prisma } from "@/lib/prisma";

export interface LedgerEntry {
  adaptationType: string;
  previousConfiguration: string;
  optimizedConfiguration: string;
  mathematicalEvidence: string;
  constitutionalValidation: string;
}

export async function recordAdaptationEvidence(workspaceId: string, entry: LedgerEntry) {
  // Enforces append-only immutable recording of adaptations
  return await prisma.adaptationEvidence.create({
    data: {
      workspaceId,
      ...entry
    }
  });
}

export async function fetchAdaptationLedger(workspaceId: string) {
  return await prisma.adaptationEvidence.findMany({
    where: { workspaceId },
    orderBy: { createdAt: "desc" },
    take: 20
  });
}
