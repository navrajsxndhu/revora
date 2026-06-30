import { prisma } from "../prisma";
import { canAggregateGlobally } from "./privacy-boundaries";

export async function calculateGlobalMttr(): Promise<number> {
  if (!(await canAggregateGlobally())) return 0;

  const resolvedIncidents = await prisma.incident.findMany({
    where: {
      isEligibleForBenchmarking: true,
      state: 'RESOLVED',
      workspace: { benchmarkOptIn: true }
    },
    select: {
      createdAt: true,
      updatedAt: true
    }
  });

  if (resolvedIncidents.length === 0) return 0;

  let totalMinutes = 0;
  for (const inc of resolvedIncidents) {
    totalMinutes += (inc.updatedAt.getTime() - inc.createdAt.getTime()) / 60000;
  }

  // Simplified median/average. Using average for performance here.
  return Math.round(totalMinutes / resolvedIncidents.length);
}

export async function calculateGlobalRecoverySuccess(): Promise<number> {
  if (!(await canAggregateGlobally())) return 0;

  const incidentsWithRecovery = await prisma.incident.findMany({
    where: {
      isEligibleForBenchmarking: true,
      recoveryStatus: { not: null },
      workspace: { benchmarkOptIn: true }
    },
    select: { resolvedSuccessfully: true }
  });

  if (incidentsWithRecovery.length === 0) return 0;
  
  const successful = incidentsWithRecovery.filter(i => i.resolvedSuccessfully).length;
  return Math.round((successful / incidentsWithRecovery.length) * 100);
}
