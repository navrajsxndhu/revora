import { ConvergenceResult } from "./convergence-engine";
import { GovernanceOptimizationResult } from "./governance-optimization";
import { StabilityOptimizationResult } from "./stability-optimization";

export type AdaptationClass = "STATIC" | "ADAPTING" | "IMPROVING" | "SELF_OPTIMIZING" | "CONVERGENT";

export interface AdaptationIndexResult {
  adaptationScore: number;
  adaptationClass: AdaptationClass;
  optimizationMaturity: string;
  evidence: string[];
}

export function calculateAdaptationIndex(
  convergence: ConvergenceResult,
  governance: GovernanceOptimizationResult,
  stability: StabilityOptimizationResult
): AdaptationIndexResult {
  const evidence: string[] = [];
  
  let score = convergence.convergenceScore * 0.4;
  score += stability.survivabilityImprovement * 0.3;
  
  if (governance.optimizationCategory !== "MAINTENANCE") {
    score += governance.projectedImprovement * 0.3;
  }

  score = Math.max(0, Math.min(100, score));

  let adaptationClass: AdaptationClass = "STATIC";
  let maturity = "IMMATURE";

  if (score >= 90) {
    adaptationClass = "CONVERGENT";
    maturity = "MATHEMATICALLY_OPTIMAL";
  } else if (score >= 75) {
    adaptationClass = "SELF_OPTIMIZING";
    maturity = "HIGHLY_ADAPTIVE";
  } else if (score >= 50) {
    adaptationClass = "IMPROVING";
    maturity = "STABILIZING_OPERATIONS";
  } else if (score >= 25) {
    adaptationClass = "ADAPTING";
    maturity = "REACTIVE_ADAPTATION";
  } else {
    adaptationClass = "STATIC";
    maturity = "RIGID_INFRASTRUCTURE";
  }

  evidence.push(`Adaptation Score calculated at ${score.toFixed(1)}/100.`);
  evidence.push(`Classified as ${adaptationClass} with ${maturity} maturity.`);

  return {
    adaptationScore: score,
    adaptationClass,
    optimizationMaturity: maturity,
    evidence
  };
}
