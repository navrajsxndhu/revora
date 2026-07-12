import { prisma } from "@/lib/prisma";

export interface AntibodyResult {
  antibodyStrength: number;
  activeAntibodies: number;
  deployedDoctrines: string[];
  evidence: string[];
}

export async function synthesizeContinuityAntibodies(workspaceId: string): Promise<AntibodyResult> {
  const evidence: string[] = [];
  const deployedDoctrines: string[] = [];

  const antibodies = await prisma.continuityAntibodyRecord.findMany({
    where: { workspaceId },
    orderBy: { recordedAt: "desc" },
    take: 5
  });

  let antibodyStrength = 100.0;
  let activeAntibodies = antibodies.length;

  if (activeAntibodies === 0) {
    antibodyStrength = 20.0;
    evidence.push("No continuity antibodies exist. Civilization is highly vulnerable to systemic infection.");
  } else {
    let combinedStrength = 0;
    for (const ab of antibodies) {
      combinedStrength += ab.protectionStrength;
      deployedDoctrines.push(ab.antibodyType);
    }
    
    antibodyStrength = Math.min(100, combinedStrength / antibodies.length);
    evidence.push(`${activeAntibodies} continuity antibodies deployed, providing ${antibodyStrength.toFixed(1)}% systemic protection.`);
  }

  // Derive new protective mechanisms based on lack of temporal resilience
  const debt = await prisma.temporalDebtProfile.findFirst({
    where: { workspaceId }
  });

  if (debt && debt.debtScore > 60) {
    deployedDoctrines.push("TEMPORAL_DEBT_STABILIZATION");
    evidence.push("High temporal debt detected; synthesizing Temporal Debt Stabilization doctrine as protective antibody.");
  }

  return {
    antibodyStrength,
    activeAntibodies,
    deployedDoctrines: [...new Set(deployedDoctrines)],
    evidence
  };
}
