import { AwarenessClassification } from "./systemic-awareness";

export type SimulationScenario = "FEDERATION_DESYNC" | "GOVERNANCE_BLIND_SPOT" | "DISCONNECTED_INFRASTRUCTURE" | "TREATY_FRAGMENTATION";

export interface ConsciousnessSimulationResult {
  scenario: SimulationScenario;
  projectedConsciousnessClass: string;
  projectedAwarenessStability: number;
  impactDerivation: string[];
}

export function simulateConsciousnessDegradation(
  baseAwarenessScore: number,
  baseCoherence: number,
  baseIntegrity: number,
  scenario: SimulationScenario
): ConsciousnessSimulationResult {
  const impactDerivation: string[] = [];
  
  let simulatedAwareness = baseAwarenessScore;
  let simulatedCoherence = baseCoherence;
  let simulatedIntegrity = baseIntegrity;

  switch (scenario) {
    case "FEDERATION_DESYNC":
      simulatedCoherence -= 40;
      simulatedAwareness -= 15;
      impactDerivation.push("Federation desynchronization severely impacts civilization coherence (-40).");
      impactDerivation.push("Partial loss of systemic awareness due to isolated treaty states (-15).");
      break;

    case "GOVERNANCE_BLIND_SPOT":
      simulatedIntegrity -= 50;
      simulatedAwareness -= 30;
      impactDerivation.push("Governance blind spot fractures perception integrity (-50).");
      impactDerivation.push("Missing operational causality drops awareness score (-30).");
      break;

    case "DISCONNECTED_INFRASTRUCTURE":
      simulatedAwareness -= 45;
      impactDerivation.push("Infrastructure decoupling disrupts core systemic awareness (-45).");
      break;

    case "TREATY_FRAGMENTATION":
      simulatedCoherence -= 35;
      simulatedIntegrity -= 20;
      impactDerivation.push("Treaty fragmentation degrades civilization coherence (-35).");
      impactDerivation.push("Perception drift caused by misaligned governance expectations (-20).");
      break;
  }

  simulatedAwareness = Math.max(0, simulatedAwareness);
  simulatedCoherence = Math.max(0, simulatedCoherence);
  simulatedIntegrity = Math.max(0, simulatedIntegrity);

  const aggregateScore = (simulatedAwareness * 0.4) + (simulatedCoherence * 0.4) + (simulatedIntegrity * 0.2);

  let projectedClass = "OPERATIONAL_CONSCIOUSNESS";
  if (aggregateScore < 30) projectedClass = "ISOLATED";
  else if (aggregateScore < 60) projectedClass = "SYNCHRONIZING";
  else if (aggregateScore < 85) projectedClass = "COHERENT";
  else if (aggregateScore < 95) projectedClass = "CIVILIZATIONAL_AWARENESS";

  impactDerivation.push(`Aggregate simulated consciousness stability: ${aggregateScore.toFixed(1)}/100.`);

  return {
    scenario,
    projectedConsciousnessClass: projectedClass,
    projectedAwarenessStability: aggregateScore,
    impactDerivation
  };
}
