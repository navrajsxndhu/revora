import { PolicyGateDecision, DEFAULT_PIPELINE_POLICY, PipelinePolicy } from "./pipeline-policy";

export type GateContext = {
  riskLevel: string; // LOW, MEDIUM, HIGH, CRITICAL
  localReasons: string[];
  historicalBlastRadius?: number;
  rollbackFrequency?: number; // 0.0 to 1.0
  driftWarnings?: string[];
  historicalRecoverySuccess?: number; // 0.0 to 1.0
};

export type GateResult = {
  decision: PolicyGateDecision;
  reasoning: string[];
};

export function evaluateReleaseGate(context: GateContext, policy: PipelinePolicy = DEFAULT_PIPELINE_POLICY): GateResult {
  const reasoning: string[] = [...context.localReasons];
  let decision: PolicyGateDecision = "PASS";

  const escalate = (newDecision: PolicyGateDecision) => {
    if (newDecision === "BLOCK") decision = "BLOCK";
    else if (newDecision === "WARN" && decision !== "BLOCK") decision = "WARN";
  };

  // 1. Risk Level Gate
  if (policy.blockOnCriticalRisk && context.riskLevel === "CRITICAL") {
    escalate("BLOCK");
    reasoning.push("CRITICAL deployment risk score detected.");
  } else if (policy.warnOnHighRisk && context.riskLevel === "HIGH") {
    escalate("WARN");
    reasoning.push("HIGH deployment risk score detected.");
  }

  // 2. Blast Radius Gate
  if (context.historicalBlastRadius !== undefined) {
    if (context.historicalBlastRadius > policy.maxBlastRadiusForWarn) {
      escalate("BLOCK"); // If it exceeds warn, and it's huge, block it
      reasoning.push(`Historical blast radius (${context.historicalBlastRadius.toFixed(1)}) exceeds safety threshold.`);
    } else if (context.historicalBlastRadius > policy.maxBlastRadiusForPass) {
      escalate("WARN");
      reasoning.push(`Elevated historical blast radius (${context.historicalBlastRadius.toFixed(1)}).`);
    }
  }

  // 3. Rollback Frequency Gate
  if (context.rollbackFrequency !== undefined) {
    if (context.rollbackFrequency > policy.maxRollbackFrequencyForBlock) {
      escalate("BLOCK");
      reasoning.push(`Historical rollback frequency (${Math.round(context.rollbackFrequency * 100)}%) exceeds blocking threshold.`);
    } else if (context.rollbackFrequency > policy.maxRollbackFrequencyForWarn) {
      escalate("WARN");
      reasoning.push(`High historical rollback frequency (${Math.round(context.rollbackFrequency * 100)}%).`);
    }
  }

  // 4. Drift Gate
  if (context.driftWarnings && context.driftWarnings.length > 0) {
    escalate("WARN");
    reasoning.push(...context.driftWarnings);
  }

  // Default Pass
  if (reasoning.length === 0) {
    reasoning.push("No operational risk factors detected. Service is historically stable.");
  }

  return { decision, reasoning };
}
