import { prisma } from "@/lib/prisma";

export async function extractSLI(sloId: string) {
  // Deterministically extracts measurements from telemetry
  return await prisma.serviceLevelIndicator.findMany({
    where: { sloId },
    orderBy: { timestamp: 'desc' }
  });
}
