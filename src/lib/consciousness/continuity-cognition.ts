import { prisma } from "@/lib/prisma";

export interface CognitionResult {
  multiEraLinkage: number;
  survivabilityCausality: number;
  governanceSync: number;
  evidence: string[];
}

export async function evaluateContinuityCognition(workspaceId: string): Promise<CognitionResult> {
  const evidence: string[] = [];
  
  // 1. Fetch organizational lineage and temporal debt
  const lineages = await prisma.organizationalLineage.findMany({
    where: { workspaceId },
    orderBy: { recordedAt: "desc" },
    take: 3
  });

  const temporalDebt = await prisma.temporalDebtProfile.findFirst({
    where: { workspaceId },
    orderBy: { updatedAt: "desc" }
  });

  let multiEraLinkage = 100.0;
  let survivabilityCausality = 100.0;
  let governanceSync = 100.0;

  if (lineages.length < 2) {
    multiEraLinkage = 20.0;
    evidence.push("Insufficient historical operational eras to establish strong multi-era linkage.");
  } else {
    // Check if resilience scores are stable across eras
    const resilienceDiff = Math.abs(lineages[0].resilienceScore - lineages[1].resilienceScore);
    if (resilienceDiff > 20) {
      multiEraLinkage -= 25.0;
      evidence.push("High volatility in resilience between operational epochs degrades continuity linkage.");
    } else {
      evidence.push("Stable resilience transition between epochs ensures robust continuity cognition.");
    }
  }

  if (temporalDebt) {
    const debtPenalty = (temporalDebt.debtScore / 100) * 30.0;
    survivabilityCausality -= debtPenalty;
    if (debtPenalty > 15) {
      evidence.push(`High temporal debt obscures survivability causality chains (-${debtPenalty.toFixed(1)}).`);
    }

    const modernLiability = (temporalDebt.modernizationLiability / 100) * 20.0;
    governanceSync -= modernLiability;
    if (modernLiability > 10) {
      evidence.push(`Modernization liability causes governance synchronization drift (-${modernLiability.toFixed(1)}).`);
    }
  } else {
    survivabilityCausality -= 40.0;
    evidence.push("Missing temporal debt profile limits causality confidence.");
  }

  return {
    multiEraLinkage: Math.max(0, Math.min(100, multiEraLinkage)),
    survivabilityCausality: Math.max(0, Math.min(100, survivabilityCausality)),
    governanceSync: Math.max(0, Math.min(100, governanceSync)),
    evidence
  };
}
