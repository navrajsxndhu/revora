import { canAggregateGlobally } from "./privacy-boundaries";
import { prisma } from "../prisma";

export async function getGlobalSignatureIntelligence() {
  if (!(await canAggregateGlobally())) return [];

  const incidents = await prisma.incident.findMany({
    where: { 
      isEligibleForBenchmarking: true,
      failureSignature: { not: null },
      workspace: { benchmarkOptIn: true }
    },
    select: { failureSignature: true, resolvedSuccessfully: true }
  });

  const stats: Record<string, { total: number, successful: number }> = {};
  
  for (const inc of incidents) {
    const sig = inc.failureSignature!;
    if (!stats[sig]) stats[sig] = { total: 0, successful: 0 };
    stats[sig].total += 1;
    if (inc.resolvedSuccessfully) stats[sig].successful += 1;
  }

  return Object.entries(stats)
    .filter(([_, data]) => data.total > 2) // Enforce minimum sample threshold per signature
    .map(([signature, data]) => ({
      signature,
      globalOccurrences: data.total,
      recoverySuccessRate: Math.round((data.successful / data.total) * 100),
      mostEffectiveRemediation: 'Auto-scaled resources and drained queues (Aggregated)' // Mocked deterministic insight
    }))
    .sort((a, b) => b.globalOccurrences - a.globalOccurrences);
}
