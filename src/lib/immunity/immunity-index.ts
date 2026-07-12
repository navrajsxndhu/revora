import { PathogenResult } from "./pathogen-detection";
import { QuarantineResult } from "./survivability-quarantine";
import { IntegrityResult } from "./governance-integrity";
import { AntibodyResult } from "./continuity-antibodies";

export type ImmunityClass = "VULNERABLE" | "DEFENSIVE" | "STABILIZED" | "RESILIENT" | "IMMUNE_CIVILIZATION";

export interface ImmunityIndexResult {
  immunityScore: number;
  immunityClass: ImmunityClass;
  containmentSurvivabilityHorizon: string;
  evidence: string[];
}

export function calculateImmunityIndex(
  pathogen: PathogenResult,
  quarantine: QuarantineResult,
  integrity: IntegrityResult,
  antibody: AntibodyResult
): ImmunityIndexResult {
  const evidence: string[] = [];
  
  // Base score derived from governance integrity
  let score = integrity.purityScore * 0.4;
  
  // Add antibody protection
  score += antibody.antibodyStrength * 0.3;
  
  // Subtract pathogen contamination
  score -= pathogen.pathogenScore * 0.3;
  
  // Quarantine status penalty
  if (quarantine.containmentStatus === "BREACHED") {
    score -= 25;
    evidence.push("Quarantine breach applies severe penalty to overall immunity score.");
  } else if (quarantine.containmentStatus === "LEAKING") {
    score -= 10;
  }

  score = Math.max(0, Math.min(100, score));

  let immunityClass: ImmunityClass = "VULNERABLE";
  let horizon = "UNSTABLE";

  if (score >= 95) {
    immunityClass = "IMMUNE_CIVILIZATION";
    horizon = "INFINITE_CONTINUITY";
  } else if (score >= 85) {
    immunityClass = "RESILIENT";
    horizon = "LONG_TERM_STABILITY";
  } else if (score >= 60) {
    immunityClass = "STABILIZED";
    horizon = "MEDIUM_TERM_SURVIVABILITY";
  } else if (score >= 30) {
    immunityClass = "DEFENSIVE";
    horizon = "SHORT_TERM_CONTAINMENT";
  } else {
    immunityClass = "VULNERABLE";
    horizon = "IMMINENT_CORRUPTION";
  }

  evidence.push(`Immunity Score calculated at ${score.toFixed(1)}/100, classifying civilization as ${immunityClass}.`);
  evidence.push(`Containment Survivability Horizon: ${horizon}.`);

  return {
    immunityScore: score,
    immunityClass,
    containmentSurvivabilityHorizon: horizon,
    evidence
  };
}
