import { prisma } from "@/lib/prisma";

export type ConvergenceClass = "DIVERGING" | "STABILIZING" | "CONVERGING" | "OPTIMAL";

export interface ConvergenceResult {
  convergenceScore: number;
  optimizationDelta: number;
  stabilityImprovement: number;
  classification: ConvergenceClass;
  evidence: string[];
}

export async function calculateConvergence(workspaceId: string): Promise<ConvergenceResult> {
  const evidence: string[] = [];

  // Compare recent historical states
  const recentOptimizations = await prisma.governanceOptimization.findMany({
    where: { workspaceId },
    orderBy: { activatedAt: "desc" },
    take: 5
  });

  const recentStability = await prisma.civilizationEvolutionRecord.findFirst({
    where: { workspaceId },
    orderBy: { recordedAt: "desc" }
  });

  let convergenceScore = 50.0;
  let optimizationDelta = 0.0;
  let stabilityImprovement = 0.0;

  if (recentOptimizations.length > 0) {
    let totalDelta = 0;
    for (const opt of recentOptimizations) {
      totalDelta += opt.optimizationDelta;
    }
    optimizationDelta = totalDelta / recentOptimizations.length;
    
    if (optimizationDelta > 5) {
      convergenceScore += 30;
      evidence.push(`Recent optimizations show a positive delta of +${optimizationDelta.toFixed(2)}. Trajectory is converging.`);
    } else if (optimizationDelta < 0) {
      convergenceScore -= 20;
      evidence.push(`Recent optimizations show a negative delta of ${optimizationDelta.toFixed(2)}. Governance is diverging.`);
    } else {
      evidence.push("Optimization delta is neutral. System is stabilizing.");
    }
  } else {
    evidence.push("No historical optimizations found. Baseline convergence score applied.");
  }

  if (recentStability && recentStability.survivabilityImpact > 80) {
    stabilityImprovement = 15.0;
    convergenceScore += 15;
    evidence.push("High survivability impact indicates strong stability improvement over time.");
  }

  convergenceScore = Math.max(0, Math.min(100, convergenceScore));

  let classification: ConvergenceClass = "DIVERGING";
  if (convergenceScore >= 85) classification = "OPTIMAL";
  else if (convergenceScore >= 60) classification = "CONVERGING";
  else if (convergenceScore >= 40) classification = "STABILIZING";

  evidence.push(`Final convergence score: ${convergenceScore.toFixed(1)}, classified as ${classification}.`);

  return {
    convergenceScore,
    optimizationDelta,
    stabilityImprovement,
    classification,
    evidence
  };
}
