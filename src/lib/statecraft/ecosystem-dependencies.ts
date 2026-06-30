import { prisma } from '@/lib/prisma';

export async function calculateEcosystemFragility(workspaceId: string) {
  const deps = await prisma.ecosystemDependency.findMany({
    where: { workspaceId }
  });

  let fragilityScore = 0;
  for (const dep of deps) {
    fragilityScore += dep.dependencyConcentration * 0.5;
  }
  fragilityScore = Math.min(100, fragilityScore);

  let survivabilityImpact = 'LOW';
  if (fragilityScore > 75) survivabilityImpact = 'SYSTEMIC_RISK';
  else if (fragilityScore > 50) survivabilityImpact = 'FRAGILE';
  else if (fragilityScore > 25) survivabilityImpact = 'COUPLED';
  else survivabilityImpact = 'DISTRIBUTED';

  return { fragilityScore, survivabilityImpact };
}
