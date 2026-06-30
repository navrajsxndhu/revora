export type PolicyGateDecision = "PASS" | "WARN" | "BLOCK";

export type PipelinePolicy = {
  maxBlastRadiusForPass: number;
  maxBlastRadiusForWarn: number;
  blockOnCriticalRisk: boolean;
  warnOnHighRisk: boolean;
  maxRollbackFrequencyForWarn: number; // percentage (0.0 to 1.0)
  maxRollbackFrequencyForBlock: number;
};

export const DEFAULT_PIPELINE_POLICY: PipelinePolicy = {
  maxBlastRadiusForPass: 1.5,
  maxBlastRadiusForWarn: 4.0,
  blockOnCriticalRisk: true,
  warnOnHighRisk: true,
  maxRollbackFrequencyForWarn: 0.2, // 20%
  maxRollbackFrequencyForBlock: 0.4 // 40%
};
