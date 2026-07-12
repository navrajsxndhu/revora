import { prisma } from "@/lib/prisma";

export type ExecutionClass = "MANUAL" | "CONTROLLED" | "ORCHESTRATED" | "DETERMINISTIC" | "EXECUTION_CIVILIZATION";

export interface ExecutionIndexResult {
  executionScore: number;
  executionClass: ExecutionClass;
  executionMaturity: string;
}

export async function calculateExecutionIndex(workspaceId: string): Promise<ExecutionIndexResult> {
  const totalExecutions = await prisma.operationalExecution.count({
    where: { workspaceId }
  });

  let score = 0;

  if (totalExecutions > 50) {
    score = 98;
  } else if (totalExecutions > 10) {
    score = 80;
  } else if (totalExecutions > 0) {
    score = 50;
  } else {
    score = 20;
  }

  let executionClass: ExecutionClass = "MANUAL";
  let maturity = "UNDEFINED";

  if (score >= 90) {
    executionClass = "EXECUTION_CIVILIZATION";
    maturity = "PERFECTLY_REPRODUCIBLE";
  } else if (score >= 75) {
    executionClass = "DETERMINISTIC";
    maturity = "HIGHLY_ORCHESTRATED";
  } else if (score >= 50) {
    executionClass = "ORCHESTRATED";
    maturity = "PARTIALLY_REPRODUCIBLE";
  } else if (score >= 25) {
    executionClass = "CONTROLLED";
    maturity = "MANUAL_GATES";
  } else {
    executionClass = "MANUAL";
    maturity = "AD_HOC";
  }

  return {
    executionScore: score,
    executionClass,
    executionMaturity: maturity
  };
}
