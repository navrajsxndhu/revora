import { aggregateFleetIntelligence } from "../network/fleet-intelligence";

export async function calculateAdaptiveBudgetPenalty(workspaceId: string): Promise<number> {
  const fleet = await aggregateFleetIntelligence(workspaceId);
  
  if (fleet.fleetState === 'CRITICAL') return 20; // Massive penalty tightening budgets
  if (fleet.fleetState === 'DEGRADED') return 10;
  return 0; // Baseline
}
