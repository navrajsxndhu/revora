import { prisma } from "@/lib/prisma";

export interface StabilityOptimizationResult {
  optimizationRecommendations: string[];
  survivabilityImprovement: number;
  resilienceDelta: number;
  evidence: string[];
}

export async function optimizeStability(workspaceId: string): Promise<StabilityOptimizationResult> {
  const evidence: string[] = [];
  const recommendations: string[] = [];
  let survivabilityImprovement = 0.0;
  let resilienceDelta = 0.0;

  // We look at the most recent SystemicAwarenessSnapshot for entropy/coherence
  const awareness = await prisma.systemicAwarenessSnapshot.findFirst({
    where: { workspaceId },
    orderBy: { capturedAt: "desc" }
  });

  if (awareness) {
    if (awareness.coherenceIntegrity < 75) {
      recommendations.push("INCREASE_FEDERATION_SYNCHRONIZATION");
      survivabilityImprovement += 15.0;
      resilienceDelta += 5.5;
      evidence.push(`Coherence integrity is low (${awareness.coherenceIntegrity.toFixed(1)}%). Recommending increased federation synchronization.`);
    }

    if (awareness.causalityDensity < 0.5) {
      recommendations.push("ENFORCE_CAUSALITY_LOGGING");
      survivabilityImprovement += 10.0;
      resilienceDelta += 3.2;
      evidence.push(`Causality density is critically sparse (${awareness.causalityDensity.toFixed(2)}). Recommending strict causality logging.`);
    }

    if (recommendations.length === 0) {
      evidence.push("System stability is mathematically optimal based on recent awareness data. No entropy reduction recommendations required.");
    }
  } else {
    evidence.push("No awareness data found to derive stability optimizations. Operating at baseline entropy assumptions.");
  }

  return {
    optimizationRecommendations: recommendations,
    survivabilityImprovement,
    resilienceDelta,
    evidence
  };
}
