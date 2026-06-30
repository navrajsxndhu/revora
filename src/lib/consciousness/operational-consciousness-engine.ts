import { prisma } from "@/lib/prisma";
import { calculateSystemicAwareness } from "./systemic-awareness";
import { evaluateContinuityCognition } from "./continuity-cognition";
import { evaluatePerceptionIntegrity } from "./perception-integrity";
import { evaluateCivilizationCoherence } from "./civilization-coherence";
import { calculateConsciousnessIndex, ConsciousnessIndexResult } from "./consciousness-index";

export async function processOperationalConsciousness(workspaceId: string): Promise<ConsciousnessIndexResult> {
  // 1. Systemic Awareness
  const awareness = await calculateSystemicAwareness(workspaceId);
  
  await prisma.systemicAwarenessSnapshot.create({
    data: {
      workspaceId,
      awarenessScore: awareness.awarenessScore,
      coherenceIntegrity: awareness.coherenceIntegrity,
      causalityDensity: awareness.causalityDensity
    }
  });

  // 2. Continuity Cognition
  const cognition = await evaluateContinuityCognition(workspaceId);
  // (We use its outputs directly to feed into the index)

  // 3. Perception Integrity
  const perception = await evaluatePerceptionIntegrity(workspaceId);
  
  await prisma.operationalPerceptionRecord.create({
    data: {
      workspaceId,
      integrityScore: perception.integrityScore,
      blindSpotIndex: perception.blindSpotIndex,
      synchronizationDrift: perception.synchronizationDrift
    }
  });

  // 4. Civilization Coherence
  const coherence = await evaluateCivilizationCoherence(workspaceId);
  
  // Create civilization coherence snapshot (linking to federation if possible)
  // For simplicity here we just use it for the index score, though the spec says to save it
  const workspace = await prisma.workspace.findUnique({
    where: { id: workspaceId }
  });
  
  const federations = await prisma.sovereignFederation.findMany();
  const activeFederation = federations.find(f => 
    f.memberOrganizations.includes(workspace?.organizationId || "")
  );

  if (activeFederation) {
    await prisma.civilizationCoherenceSnapshot.create({
      data: {
        federationId: activeFederation.id,
        coherenceScore: coherence.coherenceScore,
        continuityAlignment: coherence.continuityAlignment,
        survivabilityAgreement: coherence.survivabilityAgreement
      }
    });
  }

  // 5. Aggregate Consciousness Index
  // Weighting cognition as an average of multiEraLinkage, survivabilityCausality, and governanceSync
  const averageCognition = (cognition.multiEraLinkage + cognition.survivabilityCausality + cognition.governanceSync) / 3;

  const indexResult = calculateConsciousnessIndex(
    awareness.awarenessScore,
    averageCognition,
    perception.integrityScore,
    coherence.coherenceScore
  );

  // 6. Save Projection
  await prisma.consciousnessProjection.create({
    data: {
      workspaceId,
      projectionHorizon: indexResult.awarenessSurvivabilityHorizon,
      consciousnessClass: indexResult.consciousnessClass,
      awarenessStability: indexResult.consciousnessScore
    }
  });

  // Consolidate evidence
  indexResult.evidence = [
    ...indexResult.evidence,
    ...awareness.evidence,
    ...cognition.evidence,
    ...perception.evidence,
    ...coherence.evidence
  ];

  return indexResult;
}
