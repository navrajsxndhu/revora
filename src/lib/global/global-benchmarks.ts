import { calculateGlobalMttr, calculateGlobalRecoverySuccess } from "./benchmark-calculator";
import { prisma } from "../prisma";
import { canAggregateGlobally } from "./privacy-boundaries";

export async function getGlobalBenchmarks() {
  if (!(await canAggregateGlobally())) {
    return {
      mttrMinutes: 0,
      recoverySuccessRate: 0,
      totalBenchmarkedIncidents: 0,
      status: 'INSUFFICIENT_DATA'
    };
  }

  const mttrMinutes = await calculateGlobalMttr();
  const recoverySuccessRate = await calculateGlobalRecoverySuccess();
  
  const totalBenchmarkedIncidents = await prisma.incident.count({
    where: {
      isEligibleForBenchmarking: true,
      workspace: { benchmarkOptIn: true }
    }
  });

  return {
    mttrMinutes,
    recoverySuccessRate,
    totalBenchmarkedIncidents,
    status: 'ACTIVE'
  };
}
