import { evaluateRiskRules } from "./risk-rules";
import { detectArchitecturalDrift } from "./drift-detection";
import { recommendRolloutStrategy } from "./rollout-strategy";

export type DeploymentPayload = {
  serviceName: string;
  commitSha: string;
  environment: string;
  changedFiles: string[];
  dependencyChanges?: string[];
};

export async function evaluateDeploymentRisk(payload: DeploymentPayload) {
  const { level: ruleLevel, reasons: ruleReasons } = evaluateRiskRules(payload.changedFiles, payload.dependencyChanges);
  
  const drift = await detectArchitecturalDrift(payload.serviceName);
  
  let finalRiskLevel = ruleLevel;

  // Elevate risk if architectural drift is severe
  if (drift.driftWarnings.length > 0) {
    if (finalRiskLevel === "LOW") finalRiskLevel = "MEDIUM";
    else if (finalRiskLevel === "MEDIUM") finalRiskLevel = "HIGH";
    else if (finalRiskLevel === "HIGH" && drift.maxBlastRadius >= 3) finalRiskLevel = "CRITICAL";
  }

  const rolloutStrategy = recommendRolloutStrategy(finalRiskLevel, drift.driftWarnings, drift.maxBlastRadius);

  const combinedReasons = [...ruleReasons, ...drift.driftWarnings];

  return {
    riskLevel: finalRiskLevel,
    riskReasoning: combinedReasons.join(' | '),
    rolloutStrategy,
    driftWarnings: drift.driftWarnings,
    maxBlastRadius: drift.maxBlastRadius
  };
}
