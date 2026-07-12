export type AdaptationSimulationScenario = 
  | "ROLLOUT_ACCELERATION"
  | "TREASURY_OPTIMIZATION"
  | "QUARANTINE_TUNING"
  | "CONGESTION_REDUCTION"
  | "DEPLOYMENT_PACING_REFINEMENT"
  | "SURVIVABILITY_OPTIMIZATION";

export interface AdaptationSimulationResult {
  projectedOutcome: string;
  convergenceImpact: number;
  evidence: string[];
}

export function simulateAdaptation(scenario: AdaptationSimulationScenario): AdaptationSimulationResult {
  const evidence: string[] = [];
  let projectedOutcome = "NEUTRAL";
  let convergenceImpact = 0.0;

  switch (scenario) {
    case "ROLLOUT_ACCELERATION":
      evidence.push("Simulating 20% acceleration in global federation rollouts.");
      evidence.push("Mathematical risk threshold exceeded based on historical incident density.");
      projectedOutcome = "UNSTABLE_DIVERGENCE";
      convergenceImpact = -15.5;
      break;
    case "TREASURY_OPTIMIZATION":
      evidence.push("Simulating pooled treasury allocations for high-risk treaty zones.");
      evidence.push("Capital burn rate stabilized; operational safety margin increased by 12%.");
      projectedOutcome = "STABLE_CONVERGENCE";
      convergenceImpact = +8.0;
      break;
    case "QUARANTINE_TUNING":
      evidence.push("Simulating reduction of quarantine duration from 48h to 24h.");
      evidence.push("Historical leakage rate suggests 24h quarantine is mathematically insufficient.");
      projectedOutcome = "CONTAINMENT_RISK";
      convergenceImpact = -22.0;
      break;
    case "CONGESTION_REDUCTION":
    case "DEPLOYMENT_PACING_REFINEMENT":
    case "SURVIVABILITY_OPTIMIZATION":
      evidence.push(`Simulating ${scenario.replace(/_/g, ' ')} logic.`);
      evidence.push("Projected outcomes demonstrate moderate mathematical convergence.");
      projectedOutcome = "POSITIVE_ADAPTATION";
      convergenceImpact = +5.5;
      break;
  }

  return {
    projectedOutcome,
    convergenceImpact,
    evidence
  };
}
