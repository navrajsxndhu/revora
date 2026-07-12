import { prisma } from "@/lib/prisma";

export type PlanningClass = "TACTICAL" | "STRUCTURED" | "STRATEGIC" | "INSTITUTIONAL" | "OPERATIONAL_PLANNING_CIVILIZATION";

export interface PlanningIndexResult {
  planningScore: number;
  planningClass: PlanningClass;
  planningMaturity: string;
}

export async function calculatePlanningIndex(workspaceId: string): Promise<PlanningIndexResult> {
  const totalPlans = await prisma.operationalPlan.count({
    where: { workspaceId }
  });

  let score = 0;

  if (totalPlans > 50) {
    score = 94;
  } else if (totalPlans > 15) {
    score = 78;
  } else if (totalPlans > 5) {
    score = 52;
  } else if (totalPlans > 0) {
    score = 25;
  } else {
    score = 10;
  }

  let planningClass: PlanningClass = "TACTICAL";
  let maturity = "UNDEFINED";

  if (score >= 90) {
    planningClass = "OPERATIONAL_PLANNING_CIVILIZATION";
    maturity = "MATHEMATICALLY_ASSEMBLED";
  } else if (score >= 75) {
    planningClass = "INSTITUTIONAL";
    maturity = "SYSTEMATIC_STRATEGY";
  } else if (score >= 50) {
    planningClass = "STRATEGIC";
    maturity = "DEPENDENCY_AWARE";
  } else if (score >= 25) {
    planningClass = "STRUCTURED";
    maturity = "BASIC_ROADMAPS";
  } else {
    planningClass = "TACTICAL";
    maturity = "AD_HOC_EXECUTION";
  }

  return {
    planningScore: score,
    planningClass,
    planningMaturity: maturity
  };
}
