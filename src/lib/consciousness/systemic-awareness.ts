import { prisma } from "@/lib/prisma";

export type AwarenessClassification = "COHERENT" | "FRAGMENTING" | "DISJOINTED" | "COLLAPSING";

interface AwarenessResult {
  awarenessScore: number;
  coherenceIntegrity: number;
  causalityDensity: number;
  classification: AwarenessClassification;
  evidence: string[];
}

export async function calculateSystemicAwareness(workspaceId: string): Promise<AwarenessResult> {
  // Deterministic calculation of systemic awareness based on recent operational data
  
  const evidence: string[] = [];
  
  // 1. Gather recent infrastructure and continuity snapshots
  const recentInfra = await prisma.infrastructureSurvivabilitySnapshot.findFirst({
    where: { workspaceId },
    orderBy: { capturedAt: "desc" }
  });

  const recentContinuity = await prisma.operationalContinuitySnapshot.findFirst({
    where: { workspaceId },
    orderBy: { createdAt: "desc" }
  });

  const recentDrift = await prisma.temporalDriftSnapshot.findFirst({
    where: { workspaceId },
    orderBy: { recordedAt: "desc" }
  });

  let awarenessScore = 100.0;
  let coherenceIntegrity = 100.0;
  let causalityDensity = 1.0;

  // Rule 1: Missing data fragments awareness
  if (!recentInfra || !recentContinuity) {
    awarenessScore -= 40.0;
    coherenceIntegrity -= 30.0;
    causalityDensity = 0.2;
    evidence.push("Missing core continuity or infrastructure snapshots, fragmenting systemic awareness.");
  } else {
    // Rule 2: Temporal drift erodes coherence
    const driftDecay = (recentDrift?.driftScore ?? 0) * 0.5;
    coherenceIntegrity = Math.max(0, coherenceIntegrity - driftDecay);
    if (driftDecay > 10) evidence.push(`Temporal drift detected (-${driftDecay.toFixed(1)} coherence).`);

    // Rule 3: Infrastructure survivability anchors awareness
    const infraScore = recentInfra.survivabilityScore;
    if (infraScore < 60) {
      awarenessScore -= 15.0;
      evidence.push("Low infrastructure survivability destabilizes deterministic operational awareness.");
    }

    // Rule 4: Continuity class determines causality density
    switch (recentContinuity.continuityClass) {
      case "CIVILIZATIONAL":
      case "ENDURING":
        causalityDensity = 0.95;
        evidence.push("Enduring civilizational continuity ensures dense causality tracking.");
        break;
      case "STABILIZING":
        causalityDensity = 0.70;
        evidence.push("Stabilizing continuity yields moderate causality density.");
        break;
      default:
        causalityDensity = 0.40;
        awarenessScore -= 20.0;
        evidence.push("Reactive continuity fractures causal operational chains.");
        break;
    }
  }

  awarenessScore = Math.max(0, Math.min(100, awarenessScore));
  coherenceIntegrity = Math.max(0, Math.min(100, coherenceIntegrity));

  let classification: AwarenessClassification = "COHERENT";
  if (awarenessScore < 30 || causalityDensity < 0.3) classification = "COLLAPSING";
  else if (awarenessScore < 60 || coherenceIntegrity < 50) classification = "DISJOINTED";
  else if (awarenessScore < 85 || coherenceIntegrity < 80) classification = "FRAGMENTING";

  return {
    awarenessScore,
    coherenceIntegrity,
    causalityDensity,
    classification,
    evidence
  };
}
