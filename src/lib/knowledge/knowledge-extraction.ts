import { prisma } from "@/lib/prisma";

export interface ExtractionResult {
  extractedDoctrines: string[];
  confidenceScore: number;
  supportingEvidence: string[];
  historicalReferences: string[];
}

export async function extractOperationalKnowledge(workspaceId: string): Promise<ExtractionResult> {
  const extractedDoctrines: string[] = [];
  const supportingEvidence: string[] = [];
  const historicalReferences: string[] = [];
  
  // We extract knowledge deterministically from incidents and optimizations
  const resolvedIncidents = await prisma.incident.findMany({
    where: { workspaceId, state: "RESOLVED" },
    orderBy: { updatedAt: "desc" },
    take: 10
  });

  const recentOptimizations = await prisma.governanceOptimization.findMany({
    where: { workspaceId },
    orderBy: { activatedAt: "desc" },
    take: 5
  });

  let confidenceScore = 50.0;

  if (resolvedIncidents.length > 5) {
    extractedDoctrines.push("High incident density requires mandatory extended observation windows.");
    supportingEvidence.push(`Extracted from ${resolvedIncidents.length} recent resolved incidents.`);
    historicalReferences.push("INCIDENT_CLUSTER_ANALYSIS");
    confidenceScore += 20;
  }

  if (recentOptimizations.some(opt => opt.optimizationCategory === "RESILIENCE_TUNING" && opt.projectedImprovement > 10)) {
    extractedDoctrines.push("Resilience tuning yielding >10% improvement becomes permanent operational baseline.");
    supportingEvidence.push("Extracted from recent high-impact resilience tuning optimizations.");
    historicalReferences.push("OPTIMIZATION_LEDGER_REVIEW");
    confidenceScore += 15;
  }

  if (extractedDoctrines.length === 0) {
    supportingEvidence.push("Insufficient historical density to extract new deterministic doctrines.");
  }

  return {
    extractedDoctrines,
    confidenceScore: Math.min(100, confidenceScore),
    supportingEvidence,
    historicalReferences
  };
}
