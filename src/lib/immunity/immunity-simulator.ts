export type ImmunitySimulationScenario = 
  | "GOVERNANCE_CORRUPTION_OUTBREAK"
  | "TREATY_COLLAPSE_CONTAGION"
  | "TREASURY_EXHAUSTION_PROPAGATION"
  | "DEPENDENCY_CONCENTRATION_INFECTION";

export interface ImmunitySimulationResult {
  projectedImmunityScore: number;
  projectedProtectionClass: string;
  containmentSurvivabilityHorizon: string;
  immunityDerivation: string[];
}

export function simulateImmunityStress(
  baseImmunity: number,
  scenario: ImmunitySimulationScenario
): ImmunitySimulationResult {
  const derivation: string[] = [];
  let projectedImmunity = baseImmunity;
  let horizon = "STABLE";

  switch (scenario) {
    case "GOVERNANCE_CORRUPTION_OUTBREAK":
      derivation.push("Simulating rapid spread of override normalization and constitutional drift.");
      projectedImmunity -= 35;
      derivation.push("Integrity confidence drops severely; pathogen score spikes.");
      horizon = "CRITICAL_THREAT";
      break;
    case "TREATY_COLLAPSE_CONTAGION":
      derivation.push("Simulating cascading treaty invalidations across sovereign federations.");
      projectedImmunity -= 25;
      derivation.push("Quarantine breaches detected in 3 zones. Containment leaking.");
      horizon = "ELEVATED_THREAT";
      break;
    case "TREASURY_EXHAUSTION_PROPAGATION":
      derivation.push("Simulating accelerated capital depletion due to unmitigated operational shortcuts.");
      projectedImmunity -= 20;
      derivation.push("Pathogen propagation velocity increases due to lack of resilient capital buffers.");
      horizon = "DEGRADING";
      break;
    case "DEPENDENCY_CONCENTRATION_INFECTION":
      derivation.push("Simulating systemic failure originating from a centralized, tightly coupled ecosystem dependency.");
      projectedImmunity -= 40;
      derivation.push("Antibody strength insufficient to counteract structural collapse.");
      horizon = "IMMINENT_COLLAPSE";
      break;
  }

  projectedImmunity = Math.max(0, projectedImmunity);

  let projectedClass = "IMMUNE_CIVILIZATION";
  if (projectedImmunity < 30) projectedClass = "VULNERABLE";
  else if (projectedImmunity < 60) projectedClass = "DEFENSIVE";
  else if (projectedImmunity < 85) projectedClass = "STABILIZED";
  else if (projectedImmunity < 95) projectedClass = "RESILIENT";

  derivation.push(`Final projected immunity classification: ${projectedClass} with score ${projectedImmunity.toFixed(1)}`);

  return {
    projectedImmunityScore: projectedImmunity,
    projectedProtectionClass: projectedClass,
    containmentSurvivabilityHorizon: horizon,
    immunityDerivation: derivation
  };
}
