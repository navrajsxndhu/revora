// Stub for analytical aggregations not directly tied to Prisma queries
// but used for statistical smoothing over time.

export function normalizeTrend(data: number[], threshold: number): number[] {
  // Simple moving average or outlier rejection for trends
  return data.filter(d => d >= threshold);
}
