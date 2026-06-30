export function evaluateResilience(activeQueues: number, averageLag: number) {
  if (activeQueues > 500 && averageLag > 200) {
    return { status: "WARNING", action: "Consider scaling recovery worker concurrency or shifting async workloads to a secondary region." };
  }
  return { status: "OPTIMAL", action: "No resilience actions needed." };
}
