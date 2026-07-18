import { prisma } from "@/lib/prisma";

export async function analyzeRootCause(incidentId: string) {
  // Backwards-chains through determinisitic hashes from execution payloads
  return await prisma.rootCauseEvidence.findMany({
    where: { incidentId }
  });
}
