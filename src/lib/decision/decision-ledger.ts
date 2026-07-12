import { prisma } from "@/lib/prisma";
import { TradeoffMatrixRow } from "./tradeoff-analysis";

export async function recordDecision(
  workspaceId: string, 
  decisionType: string, 
  selectedOption: string, 
  tradeoffs: TradeoffMatrixRow[],
  score: number
) {
  return await prisma.operationalDecision.create({
    data: {
      workspaceId,
      decisionType,
      selectedOption,
      decisionScore: score,
      alternatives: {
        create: tradeoffs.map(t => ({
          optionName: t.optionName,
          survivabilityImpact: t.survivabilityImpact,
          treasuryImpact: t.treasuryImpact,
          constitutionalCompliance: t.ranking === 1 ? "STRICT_COMPLIANCE" : "ACCEPTABLE_RISK",
          ranking: t.ranking
        }))
      },
      evidence: {
        create: [
          {
            evidenceType: "MATHEMATICAL_DERIVATION",
            sourceReference: "TRADEOFF_MATRIX_RANKING",
            mathematicalWeight: score
          }
        ]
      }
    },
    include: {
      alternatives: true,
      evidence: true
    }
  });
}

export async function getDecisionLedger(workspaceId: string) {
  return await prisma.operationalDecision.findMany({
    where: { workspaceId },
    orderBy: { createdAt: "desc" },
    take: 10,
    include: {
      alternatives: true,
      evidence: true
    }
  });
}
