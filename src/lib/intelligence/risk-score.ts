export function calculateRiskScore(metrics: {
  incidentCount: number,
  averageBlastRadius: number,
  recoveryFailureRate: number, // 0 to 1
  averageMTTR: number // in minutes
}) {
  // Deterministic formula for Risk Score (0-100)
  
  // Incident Frequency (max 30 points) - 1 point per incident up to 30
  const freqScore = Math.min(30, metrics.incidentCount * 2);
  
  // Blast Radius (max 25 points) - 5 points per average downstream service
  const blastScore = Math.min(25, metrics.averageBlastRadius * 5);
  
  // Recovery Failure (max 25 points) - scales with the rate
  const recoveryScore = Math.min(25, metrics.recoveryFailureRate * 25);
  
  // MTTR (max 20 points) - 1 point per 3 minutes
  const mttrScore = Math.min(20, metrics.averageMTTR / 3);

  const totalScore = Math.round(freqScore + blastScore + recoveryScore + mttrScore);
  const clampedScore = Math.min(100, Math.max(0, totalScore));

  let classification = "STABLE";
  if (clampedScore > 25) classification = "WATCH";
  if (clampedScore > 50) classification = "DEGRADED";
  if (clampedScore > 75) classification = "HIGH_RISK";

  return {
    score: clampedScore,
    classification
  };
}
