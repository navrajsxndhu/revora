export function generateDeterministicRecommendation(metrics: {
  incidentCount: number,
  averageBlastRadius: number,
  recoveryFailureRate: number,
  averageMTTR: number
}): string {
  if (metrics.incidentCount >= 10 && metrics.averageMTTR > 60) {
    return "Service is experiencing high failure rate and prolonged recovery. Implement automated failover or increase health-check polling.";
  }

  if (metrics.recoveryFailureRate > 0.3) {
    return "High recovery failure rate detected. Review automated restart logic and retry strategies for this component.";
  }

  if (metrics.averageBlastRadius >= 3) {
    return "Service coupling is too high. This component consistently triggers downstream failures. Introduce circuit breakers or decouple synchronous calls.";
  }

  if (metrics.incidentCount >= 5) {
    return "Recurring minor failures detected. Review recent deployment changes and verify resource limits (Memory/CPU).";
  }

  return "Service is stable. Continue normal operations.";
}
