export type DecisionSimulationScenario = 
  | "IMMEDIATE_ROLLOUT"
  | "PROGRESSIVE_ROLLOUT"
  | "FREEZE"
  | "CANARY"
  | "REGIONAL_DEPLOYMENT";

export interface DecisionSimulationResult {
  recommendedDecision: string;
  projectedOutcome: string;
  survivabilityImpact: number;
  treasuryImpact: number;
  evidence: string[];
}

export function simulateDecisionScenario(scenario: DecisionSimulationScenario): DecisionSimulationResult {
  const evidence: string[] = [];
  let recommendedDecision = "PENDING";
  let projectedOutcome = "UNKNOWN";
  let survivabilityImpact = 0;
  let treasuryImpact = 0;

  switch (scenario) {
    case "IMMEDIATE_ROLLOUT":
      evidence.push("High velocity simulated. Bypassing safety constraints.");
      recommendedDecision = "REJECTED_BY_CONSTITUTION";
      projectedOutcome = "HIGH_RISK_OF_CASCADING_FAILURE";
      survivabilityImpact = -15.0;
      treasuryImpact = +10.0;
      break;
    case "PROGRESSIVE_ROLLOUT":
    case "REGIONAL_DEPLOYMENT":
      evidence.push("Staged rollout limits blast radius.");
      recommendedDecision = "VALID_ALTERNATIVE";
      projectedOutcome = "MODERATE_VELOCITY_PRESERVED_SURVIVABILITY";
      survivabilityImpact = +2.0;
      treasuryImpact = +4.0;
      break;
    case "FREEZE":
      evidence.push("Velocity reduced to zero. Survivability maximized.");
      recommendedDecision = "VALID_ALTERNATIVE_IF_RISK_HIGH";
      projectedOutcome = "MAXIMUM_SURVIVABILITY_OPPORTUNITY_COST";
      survivabilityImpact = +15.0;
      treasuryImpact = -5.0;
      break;
    case "CANARY":
      evidence.push("Historical success rate for canary is highest.");
      recommendedDecision = "OPTIMAL_RANKING";
      projectedOutcome = "BALANCED_VELOCITY_AND_RELIABILITY";
      survivabilityImpact = +5.0;
      treasuryImpact = +2.0;
      break;
  }

  return {
    recommendedDecision,
    projectedOutcome,
    survivabilityImpact,
    treasuryImpact,
    evidence
  };
}
