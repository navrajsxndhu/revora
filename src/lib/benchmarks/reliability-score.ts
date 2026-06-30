import { ServiceRawMetrics } from "./service-benchmarks";

export type ReliabilityScore = {
  classification: "STABLE" | "WATCHLIST" | "HIGH_RISK" | "CRITICAL";
  score: number; // 0 to 100 (100 is perfect)
  breakdown: {
    mttrPoints: number; // Max 25
    blastPoints: number; // Max 25
    successPoints: number; // Max 25
    frequencyPoints: number; // Max 15
    rollbackPoints: number; // Max 10
  };
  reasoning: string[];
};

export function scoreService(metrics: ServiceRawMetrics): ReliabilityScore {
  let mttrPoints = 25;
  let blastPoints = 25;
  let successPoints = 25;
  let frequencyPoints = 15;
  let rollbackPoints = 10;
  
  const reasoning: string[] = [];

  // MTTR Scoring (Target: < 15 mins)
  if (metrics.mttrMinutes > 120) mttrPoints = 0;
  else if (metrics.mttrMinutes > 60) mttrPoints = 10;
  else if (metrics.mttrMinutes > 15) mttrPoints = 15;
  
  if (mttrPoints < 20 && metrics.mttrMinutes > 0) {
    reasoning.push(`MTTR is highly elevated (${Math.round(metrics.mttrMinutes)}m average).`);
  }

  // Blast Radius Scoring (Target: 0)
  if (metrics.avgBlastRadius >= 3) blastPoints = 0;
  else if (metrics.avgBlastRadius >= 1.5) blastPoints = 10;
  else if (metrics.avgBlastRadius > 0.5) blastPoints = 15;
  
  if (blastPoints < 25 && metrics.avgBlastRadius > 0) {
    reasoning.push(`High cascading failure risk (Avg ${metrics.avgBlastRadius.toFixed(1)} downstream symptoms).`);
  }

  // Recovery Success
  successPoints = (metrics.recoverySuccessRate / 100) * 25;
  if (successPoints < 20 && metrics.incidentCount > 0) {
    reasoning.push(`Poor automated recovery success rate (${Math.round(metrics.recoverySuccessRate)}%).`);
  }

  // Frequency (Target: 0)
  if (metrics.incidentCount > 10) frequencyPoints = 0;
  else if (metrics.incidentCount > 5) frequencyPoints = 5;
  else if (metrics.incidentCount > 2) frequencyPoints = 10;
  
  if (frequencyPoints < 15) {
    reasoning.push(`Frequent instability (${metrics.incidentCount} root cause failures).`);
  }

  // Rollbacks (Target: 0)
  if (metrics.rollbackCount > 3) rollbackPoints = 0;
  else if (metrics.rollbackCount > 0) rollbackPoints = 5;
  
  if (rollbackPoints < 10 && metrics.rollbackCount > 0) {
    reasoning.push(`Deployment rollbacks frequently triggered (${metrics.rollbackCount} events).`);
  }

  const score = Math.round(mttrPoints + blastPoints + successPoints + frequencyPoints + rollbackPoints);
  
  let classification: "STABLE" | "WATCHLIST" | "HIGH_RISK" | "CRITICAL" = "STABLE";
  if (score < 40) classification = "CRITICAL";
  else if (score < 70) classification = "HIGH_RISK";
  else if (score < 85) classification = "WATCHLIST";

  if (reasoning.length === 0) {
    reasoning.push("Service meets all target operational reliability thresholds.");
  }

  return {
    classification,
    score,
    breakdown: { mttrPoints, blastPoints, successPoints, frequencyPoints, rollbackPoints },
    reasoning
  };
}
