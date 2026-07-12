import { prisma } from "@/lib/prisma";

export type PathogenClassification = "ISOLATED" | "SPREADING" | "CONTAGIOUS" | "SYSTEMIC";

export interface PathogenResult {
  pathogenScore: number;
  contaminationSeverity: number;
  propagationVelocity: number;
  classification: PathogenClassification;
  evidence: string[];
}

export async function detectOperationalPathogens(workspaceId: string): Promise<PathogenResult> {
  const evidence: string[] = [];

  // Check recent operational state for pathogen signatures
  // E.g., Governance drift, temporal debt acceleration, unmitigated incidents

  const recentDrift = await prisma.temporalDriftSnapshot.findFirst({
    where: { workspaceId },
    orderBy: { recordedAt: "desc" }
  });

  const governanceEntropy = await prisma.governanceEntropySnapshot.findFirst({
    where: { workspaceId },
    orderBy: { capturedAt: "desc" }
  });

  let pathogenScore = 0.0;
  let contaminationSeverity = 0.0;
  let propagationVelocity = 1.0;

  if (recentDrift) {
    if (recentDrift.driftScore > 50) {
      pathogenScore += 40;
      contaminationSeverity += 35;
      propagationVelocity += 0.5;
      evidence.push("Severe temporal drift acts as a primary contagion vector for operational pathogens.");
    } else if (recentDrift.driftScore > 20) {
      pathogenScore += 15;
      contaminationSeverity += 10;
      evidence.push("Minor temporal drift provides a breeding ground for future survivability corruption.");
    }
  }

  if (governanceEntropy) {
    if (governanceEntropy.entropyScore > 60) {
      pathogenScore += 50;
      contaminationSeverity += 45;
      propagationVelocity += 1.2;
      evidence.push("Critical governance entropy detected; systemic operational contamination is actively spreading.");
    } else if (governanceEntropy.entropyScore > 30) {
      pathogenScore += 25;
      contaminationSeverity += 20;
      propagationVelocity += 0.4;
      evidence.push("Elevated governance entropy indicates early-stage operational infection.");
    }
  } else {
    pathogenScore += 20;
    evidence.push("Lack of governance visibility creates a hidden blind spot for pathogen propagation.");
  }

  pathogenScore = Math.min(100, pathogenScore);
  contaminationSeverity = Math.min(100, contaminationSeverity);
  
  let classification: PathogenClassification = "ISOLATED";
  if (pathogenScore > 85 || propagationVelocity > 2.0) classification = "SYSTEMIC";
  else if (pathogenScore > 60 || contaminationSeverity > 50) classification = "CONTAGIOUS";
  else if (pathogenScore > 30) classification = "SPREADING";

  if (classification === "ISOLATED" && pathogenScore === 0) {
    evidence.push("No active operational pathogens detected. Systemic continuity is currently stable.");
  }

  return {
    pathogenScore,
    contaminationSeverity,
    propagationVelocity,
    classification,
    evidence
  };
}
