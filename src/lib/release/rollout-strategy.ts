export function recommendRolloutStrategy(riskLevel: string, driftWarnings: string[], maxBlastRadius: number): string {
  if (riskLevel === "CRITICAL" || driftWarnings.length > 0 || maxBlastRadius >= 3) {
    return "Mandatory 5% Canary Rollout. Monitor downstream services closely for 30 minutes before proceeding. Rollback readiness must be confirmed.";
  }
  
  if (riskLevel === "HIGH" || maxBlastRadius >= 1) {
    return "Partial Rollout Recommended (10% -> 50% -> 100%). Deploy during low-traffic window if possible.";
  }

  if (riskLevel === "MEDIUM") {
    return "Standard Rollout (50% -> 100%). Safe to proceed with normal operational monitoring.";
  }

  return "Full Rollout Safe. Proceed to 100% immediately.";
}
