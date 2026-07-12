import { prisma } from "@/lib/prisma";

export interface OperationalWisdomResult {
  derivedWisdom: string[];
  confidenceScore: number;
  mathematicalEvidence: string[];
}

export async function deriveOperationalWisdom(workspaceId: string): Promise<OperationalWisdomResult> {
  const derivedWisdom: string[] = [];
  const mathematicalEvidence: string[] = [];
  
  const recentEvolutions = await prisma.civilizationEvolutionRecord.findMany({
    where: { workspaceId },
    orderBy: { recordedAt: "desc" },
    take: 10
  });

  let confidenceScore = 60.0;

  if (recentEvolutions.length > 5) {
    const avgImpact = recentEvolutions.reduce((sum, ev) => sum + ev.survivabilityImpact, 0) / recentEvolutions.length;
    
    if (avgImpact > 75) {
      derivedWisdom.push("Continuous resilience transitions fundamentally decouple organizational survivability from individual operational failures.");
      mathematicalEvidence.push(`Derived from ${recentEvolutions.length} epochs maintaining an average survivability impact of ${avgImpact.toFixed(1)}%.`);
      confidenceScore += 25;
    } else {
      derivedWisdom.push("Rapid epoch transitions without sustained survivability impact lead to systemic fragility.");
      mathematicalEvidence.push(`Derived from ${recentEvolutions.length} epochs with sub-optimal survivability impact (${avgImpact.toFixed(1)}%).`);
      confidenceScore += 10;
    }
  } else {
    mathematicalEvidence.push("Insufficient evolutionary epochs to derive mathematical wisdom.");
  }

  return {
    derivedWisdom,
    confidenceScore: Math.min(100, confidenceScore),
    mathematicalEvidence
  };
}
