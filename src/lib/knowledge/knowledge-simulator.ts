export type KnowledgeSimulationScenario = 
  | "CONSTITUTIONAL_AMENDMENT_PASSED"
  | "ADAPTATION_FAILED"
  | "TREATY_CHANGED"
  | "TREASURY_OPTIMIZATION_SUCCEEDED"
  | "TEMPORAL_DRIFT_ACCELERATED";

export interface KnowledgeSimulationResult {
  projectedKnowledgeEvolution: string;
  projectedLineageImpact: number;
  evidence: string[];
}

export function simulateKnowledgeEvolution(scenario: KnowledgeSimulationScenario): KnowledgeSimulationResult {
  const evidence: string[] = [];
  let projectedKnowledgeEvolution = "STATIC";
  let projectedLineageImpact = 0.0;

  switch (scenario) {
    case "CONSTITUTIONAL_AMENDMENT_PASSED":
      evidence.push("Simulating the passage of a constitutional amendment.");
      evidence.push("All dependent operational doctrines mathematically supersede to vN+1.");
      projectedKnowledgeEvolution = "SYSTEMIC_UPGRADE";
      projectedLineageImpact = +25.0;
      break;
    case "ADAPTATION_FAILED":
      evidence.push("Simulating an operational adaptation failure.");
      evidence.push("Knowledge extraction engine documents negative evidence to prevent recurrence.");
      projectedKnowledgeEvolution = "DEFENSIVE_LEARNING";
      projectedLineageImpact = +10.0;
      break;
    case "TEMPORAL_DRIFT_ACCELERATED":
      evidence.push("Simulating severe temporal drift acceleration.");
      evidence.push("Wisdom engine fails to derive sustained success patterns.");
      projectedKnowledgeEvolution = "KNOWLEDGE_STAGNATION";
      projectedLineageImpact = -15.0;
      break;
    case "TREATY_CHANGED":
    case "TREASURY_OPTIMIZATION_SUCCEEDED":
      evidence.push(`Simulating ${scenario.replace(/_/g, ' ')}.`);
      evidence.push("Institutional memory graph density increases with new successful operational evidence.");
      projectedKnowledgeEvolution = "INCREMENTAL_ACCRETION";
      projectedLineageImpact = +8.0;
      break;
  }

  return {
    projectedKnowledgeEvolution,
    projectedLineageImpact,
    evidence
  };
}
