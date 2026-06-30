import { computeReliabilityDNA } from "./reliability-dna";
import { detectAntiPatterns } from "./anti-patterns";
import { evaluatePolicyEffectiveness } from "./policy-learning";
import { tuneGovernanceParameters } from "./parameter-tuning";
import { applyConfidenceDecay } from "./confidence-decay";

export async function runEvolutionCycle(workspaceId: string, serviceName: string) {
  // 1. Decay old confidences
  await applyConfidenceDecay(workspaceId);

  // 2. Recompute DNA
  await computeReliabilityDNA(workspaceId, serviceName);

  // 3. Detect Anti-Patterns
  await detectAntiPatterns(workspaceId, serviceName);

  // 4. Evaluate Policy Effectiveness
  await evaluatePolicyEffectiveness(workspaceId, serviceName);

  // 5. Global Parameter Tuning
  await tuneGovernanceParameters(workspaceId);

  return { success: true, message: `Evolution cycle completed for ${serviceName}` };
}
