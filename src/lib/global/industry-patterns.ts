import { canAggregateGlobally } from "./privacy-boundaries";
import { prisma } from "../prisma";

export async function getDangerousDeploymentCategories() {
  if (!(await canAggregateGlobally())) return [];

  // In a production system, this would be a GROUP BY query on a categorical column.
  // We approximate it here safely.
  const deployments = await prisma.deployment.findMany({
    where: { 
      isEligibleForBenchmarking: true,
      workspace: { benchmarkOptIn: true },
      rollbackCount: { gt: 0 }
    },
    select: { serviceName: true }
  });

  const categoryCounts: Record<string, number> = {};
  for (const d of deployments) {
    // Categorize heuristics based on service names
    const category = d.serviceName.includes('db') || d.serviceName.includes('migration') ? 'Database Migration' :
                     d.serviceName.includes('worker') ? 'Background Worker' :
                     d.serviceName.includes('api') ? 'API Gateway' : 'General Web Service';
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
  }

  return Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([category, count]) => ({
      category,
      rollbackFrequency: count, // simplified mapping
      correlationRisk: count > 5 ? 'HIGH_RISK' : 'MODERATE_RISK'
    }));
}
