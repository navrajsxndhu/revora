import { calculateConvergence } from "./convergence-engine";
import { optimizeGovernance } from "./governance-optimization";
import { optimizeStability } from "./stability-optimization";
import { calculateAdaptationIndex } from "./adaptation-index";
import { recordAdaptationEvidence } from "./adaptation-ledger";

export async function processOperationalAdaptation(workspaceId: string) {
  // 1. Calculate Convergence
  const convergenceData = await calculateConvergence(workspaceId);

  // 2. Optimize Governance
  const governanceData = await optimizeGovernance(workspaceId);

  // 3. Optimize Stability
  const stabilityData = await optimizeStability(workspaceId);

  // 4. Calculate Adaptation Index
  const adaptationIndex = calculateAdaptationIndex(
    convergenceData,
    governanceData,
    stabilityData
  );

  // 5. Append to Ledger if new optimizations derived
  if (governanceData.optimizationCategory !== "MAINTENANCE") {
    await recordAdaptationEvidence(workspaceId, {
      adaptationType: governanceData.optimizationCategory,
      previousConfiguration: "BASELINE_UNOPTIMIZED",
      optimizedConfiguration: JSON.stringify(governanceData.parametersTuned),
      mathematicalEvidence: `Projected delta: +${governanceData.projectedImprovement.toFixed(2)}`,
      constitutionalValidation: "VALIDATED_BY_DETERMINISTIC_ENGINE"
    });
  }

  return {
    convergence: convergenceData,
    governance: governanceData,
    stability: stabilityData,
    index: adaptationIndex,
    timestamp: new Date().toISOString()
  };
}
