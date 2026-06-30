import { AwarenessClassification } from "./systemic-awareness";

export type ConsciousnessClass = "ISOLATED" | "SYNCHRONIZING" | "COHERENT" | "CIVILIZATIONAL_AWARENESS" | "OPERATIONAL_CONSCIOUSNESS";

export interface ConsciousnessIndexResult {
  consciousnessScore: number;
  consciousnessClass: ConsciousnessClass;
  awarenessSurvivabilityHorizon: string;
  evidence: string[];
}

export function calculateConsciousnessIndex(
  awarenessScore: number,
  cognitionScore: number,
  integrityScore: number,
  coherenceScore: number
): ConsciousnessIndexResult {
  const evidence: string[] = [];

  // Weights: Systemic Awareness (30%), Continuity Cognition (20%), Perception Integrity (25%), Civilization Coherence (25%)
  const consciousnessScore = 
    (awarenessScore * 0.3) + 
    (cognitionScore * 0.2) + 
    (integrityScore * 0.25) + 
    (coherenceScore * 0.25);

  let consciousnessClass: ConsciousnessClass = "OPERATIONAL_CONSCIOUSNESS";
  let horizon = "DECADE_SCALE";

  if (consciousnessScore < 30) {
    consciousnessClass = "ISOLATED";
    horizon = "IMMEDIATE_FRAGILITY";
    evidence.push("System operates in isolation. Operational consciousness is severely fragmented.");
  } else if (consciousnessScore < 60) {
    consciousnessClass = "SYNCHRONIZING";
    horizon = "YEAR_SCALE";
    evidence.push("System is actively synchronizing awareness. Coherence is forming but vulnerable.");
  } else if (consciousnessScore < 85) {
    consciousnessClass = "COHERENT";
    horizon = "MULTI_YEAR_SCALE";
    evidence.push("System maintains coherent operational awareness across primary infrastructure and governance.");
  } else if (consciousnessScore < 95) {
    consciousnessClass = "CIVILIZATIONAL_AWARENESS";
    horizon = "DECADE_SCALE";
    evidence.push("Civilizational-scale awareness established. Strong multi-era continuity and causality linkage.");
  } else {
    consciousnessClass = "OPERATIONAL_CONSCIOUSNESS";
    horizon = "MULTI_GENERATIONAL_SCALE";
    evidence.push("Absolute deterministic operational consciousness achieved. System acts as a unified continuity entity.");
  }

  return {
    consciousnessScore,
    consciousnessClass,
    awarenessSurvivabilityHorizon: horizon,
    evidence
  };
}
