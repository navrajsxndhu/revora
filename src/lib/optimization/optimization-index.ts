import { prisma } from "@/lib/prisma";

export type OptimizationClass = "REACTIVE" | "IMPROVING" | "SYSTEMATIC" | "OPTIMIZED" | "OPERATIONAL_OPTIMIZATION_CIVILIZATION";

export interface OptimizationIndexResult {
  optimizationScore: number;
  optimizationClass: OptimizationClass;
  optimizationMaturity: string;
}

export async function calculateOptimizationIndex(workspaceId: string): Promise<OptimizationIndexResult> {
  const totalOptimizations = await prisma.operationalOptimization.count({
    where: { workspaceId }
  });

  let score = 0;

  if (totalOptimizations > 100) {
    score = 98;
  } else if (totalOptimizations > 25) {
    score = 85;
  } else if (totalOptimizations > 5) {
    score = 60;
  } else if (totalOptimizations > 0) {
    score = 30;
  } else {
    score = 10;
  }

  let optimizationClass: OptimizationClass = "REACTIVE";
  let maturity = "UNDEFINED";

  if (score >= 95) {
    optimizationClass = "OPERATIONAL_OPTIMIZATION_CIVILIZATION";
    maturity = "MATHEMATICALLY_OPTIMIZED";
  } else if (score >= 80) {
    optimizationClass = "OPTIMIZED";
    maturity = "SYSTEMATIC_SOLVER";
  } else if (score >= 50) {
    optimizationClass = "SYSTEMATIC";
    maturity = "PARTIALLY_OPTIMIZED";
  } else if (score >= 25) {
    optimizationClass = "IMPROVING";
    maturity = "HEURISTIC_DRIVEN";
  } else {
    optimizationClass = "REACTIVE";
    maturity = "ISOLATED_IMPROVEMENTS";
  }

  return {
    optimizationScore: score,
    optimizationClass,
    optimizationMaturity: maturity
  };
}
