import { prisma } from "@/lib/prisma";

export interface CoherenceResult {
  coherenceScore: number;
  continuityAlignment: number;
  survivabilityAgreement: number;
  evidence: string[];
}

export async function evaluateCivilizationCoherence(workspaceId: string): Promise<CoherenceResult> {
  const evidence: string[] = [];

  const workspace = await prisma.workspace.findUnique({
    where: { id: workspaceId },
    include: {
      organization: true
    }
  });

  // Simplified approach: find federations that include this org (mock search via string match since it's JSON)
  const federations = await prisma.sovereignFederation.findMany();
  const activeFederation = federations.find(f => 
    f.memberOrganizations.includes(workspace?.organizationId || "")
  );

  let coherenceScore = 100.0;
  let continuityAlignment = 100.0;
  let survivabilityAgreement = 100.0;

  if (!activeFederation) {
    coherenceScore -= 50.0;
    continuityAlignment -= 40.0;
    survivabilityAgreement -= 30.0;
    evidence.push("Organization is not part of a Sovereign Federation. Civilization coherence is severely limited.");
  } else {
    const stability = activeFederation.federationStability;
    
    if (stability < 70) {
      coherenceScore -= (100 - stability) * 0.8;
      evidence.push(`Federation instability degrades civilization coherence (${stability.toFixed(1)}%).`);
    } else {
      evidence.push("Stable Sovereign Federation anchors civilization coherence.");
    }

    if (activeFederation.treatyCount < 2) {
      continuityAlignment -= 20.0;
      evidence.push("Low treaty count limits formal continuity alignment across the federation.");
    }

    if (activeFederation.treasuryCoordinationLevel === "ISOLATED") {
      survivabilityAgreement -= 25.0;
      evidence.push("Isolated treasury coordination fractures survivability agreement.");
    } else if (activeFederation.treasuryCoordinationLevel === "BALANCED") {
      evidence.push("Balanced treasury coordination ensures systemic survivability agreement.");
    }
  }

  return {
    coherenceScore: Math.max(0, Math.min(100, coherenceScore)),
    continuityAlignment: Math.max(0, Math.min(100, continuityAlignment)),
    survivabilityAgreement: Math.max(0, Math.min(100, survivabilityAgreement)),
    evidence
  };
}
