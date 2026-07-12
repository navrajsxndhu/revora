import { prisma } from "@/lib/prisma";

export type DecisionClass = "AD_HOC" | "STRUCTURED" | "DETERMINISTIC" | "INSTITUTIONAL" | "DECISION_CIVILIZATION";

export interface DecisionIndexResult {
  decisionScore: number;
  decisionClass: DecisionClass;
  decisionMaturity: string;
  evidence: string[];
}

export async function calculateDecisionIndex(workspaceId: string): Promise<DecisionIndexResult> {
  const evidence: string[] = [];
  
  const totalDecisions = await prisma.operationalDecision.count({
    where: { workspaceId }
  });

  let score = 0;

  if (totalDecisions > 50) {
    score = 95;
    evidence.push("High volume of deterministic decisions indicates full institutional adoption.");
  } else if (totalDecisions > 10) {
    score = 75;
    evidence.push("Growing volume of recorded decisions establishes a reproducible baseline.");
  } else if (totalDecisions > 0) {
    score = 45;
    evidence.push("Initial deterministic decisions recorded. Framework is active but lacks depth.");
  } else {
    score = 15;
    evidence.push("No deterministic decisions recorded. Organization relies on ad-hoc heuristic decision making.");
  }

  let decisionClass: DecisionClass = "AD_HOC";
  let maturity = "LOW_MATURITY";

  if (score >= 90) {
    decisionClass = "DECISION_CIVILIZATION";
    maturity = "MATHEMATICALLY_PERFECTED";
  } else if (score >= 75) {
    decisionClass = "INSTITUTIONAL";
    maturity = "HIGHLY_REPRODUCIBLE";
  } else if (score >= 50) {
    decisionClass = "DETERMINISTIC";
    maturity = "EVIDENCE_BACKED";
  } else if (score >= 25) {
    decisionClass = "STRUCTURED";
    maturity = "PARTIALLY_AUDITABLE";
  } else {
    decisionClass = "AD_HOC";
    maturity = "OPINION_DRIVEN";
  }

  return {
    decisionScore: score,
    decisionClass,
    decisionMaturity: maturity,
    evidence
  };
}
