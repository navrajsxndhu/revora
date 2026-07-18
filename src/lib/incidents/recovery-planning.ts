import { prisma } from "@/lib/prisma";

export async function generateRecoveryPlan(incidentId: string) {
  // Queries incident context and formulates a deterministic runbook
  return await prisma.incidentRecoveryPlan.findMany({
    where: { incidentId }
  });
}
