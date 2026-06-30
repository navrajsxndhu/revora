import { prisma } from "@/lib/prisma";

export interface PerceptionResult {
  integrityScore: number;
  blindSpotIndex: number;
  synchronizationDrift: number;
  evidence: string[];
}

export async function evaluatePerceptionIntegrity(workspaceId: string): Promise<PerceptionResult> {
  const evidence: string[] = [];

  const entropy = await prisma.governanceEntropySnapshot.findFirst({
    where: { workspaceId },
    orderBy: { capturedAt: "desc" }
  });

  const ecosystem = await prisma.ecosystemDependency.findMany({
    where: { workspaceId },
    orderBy: { updatedAt: "desc" },
    take: 5
  });

  let integrityScore = 100.0;
  let blindSpotIndex = 0.0;
  let synchronizationDrift = 0.0;

  if (entropy) {
    const drift = entropy.entropyScore * 0.4;
    synchronizationDrift += drift;
    if (drift > 15) {
      integrityScore -= drift;
      evidence.push(`Governance entropy introduces ${drift.toFixed(1)}% synchronization drift.`);
    }

    if (entropy.governanceDrift === "FRAGMENTING" || entropy.governanceDrift === "ENTROPIC") {
      blindSpotIndex += 30.0;
      evidence.push("Fragmenting governance lineage severely increases operational blind spots.");
    }
  } else {
    integrityScore -= 30.0;
    blindSpotIndex += 50.0;
    evidence.push("Missing governance entropy data creates a massive operational perception blind spot.");
  }

  if (ecosystem.length > 0) {
    const totalFragility = ecosystem.reduce((acc, d) => acc + d.fragilityScore, 0);
    const avgFragility = totalFragility / ecosystem.length;

    if (avgFragility > 60) {
      blindSpotIndex += 20.0;
      integrityScore -= 15.0;
      evidence.push("High ecosystem dependency fragility obscures external operational visibility.");
    } else {
      evidence.push("Stable ecosystem dependencies ensure clear external operational perception.");
    }
  }

  return {
    integrityScore: Math.max(0, Math.min(100, integrityScore)),
    blindSpotIndex: Math.max(0, Math.min(100, blindSpotIndex)),
    synchronizationDrift: Math.max(0, Math.min(100, synchronizationDrift)),
    evidence
  };
}
