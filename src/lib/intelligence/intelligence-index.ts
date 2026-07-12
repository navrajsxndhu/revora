import { prisma } from "@/lib/prisma";

export type IntelligenceClass = "OBSERVABLE" | "ANALYTICAL" | "ORGANIZED" | "EXECUTIVE" | "OPERATIONAL_INTELLIGENCE_CIVILIZATION";

export interface IntelligenceIndexResult {
  intelligenceScore: number;
  intelligenceClass: IntelligenceClass;
  intelligenceMaturity: string;
}

export async function calculateIntelligenceIndex(workspaceId: string): Promise<IntelligenceIndexResult> {
  const totalSnapshots = await prisma.operationalIntelligenceSnapshot.count({
    where: { workspaceId }
  });

  let score = 0;

  if (totalSnapshots > 30) {
    score = 95;
  } else if (totalSnapshots > 15) {
    score = 78;
  } else if (totalSnapshots > 5) {
    score = 55;
  } else if (totalSnapshots > 0) {
    score = 25;
  } else {
    score = 8;
  }

  let intelligenceClass: IntelligenceClass = "OBSERVABLE";
  let maturity = "UNDEFINED";

  if (score >= 90) {
    intelligenceClass = "OPERATIONAL_INTELLIGENCE_CIVILIZATION";
    maturity = "EVIDENCE_DRIVEN_EXECUTIVE_AWARENESS";
  } else if (score >= 70) {
    intelligenceClass = "EXECUTIVE";
    maturity = "UNIFIED_ORGANIZATIONAL_HEALTH";
  } else if (score >= 40) {
    intelligenceClass = "ORGANIZED";
    maturity = "CORRELATED_SUBSYSTEMS";
  } else if (score >= 15) {
    intelligenceClass = "ANALYTICAL";
    maturity = "DETERMINISTIC_SIGNALS";
  } else {
    intelligenceClass = "OBSERVABLE";
    maturity = "ISOLATED_METRICS";
  }

  return {
    intelligenceScore: score,
    intelligenceClass,
    intelligenceMaturity: maturity
  };
}
