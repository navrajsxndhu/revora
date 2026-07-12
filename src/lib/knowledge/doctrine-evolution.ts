import { prisma } from "@/lib/prisma";

export interface DoctrineEvolutionResult {
  activeDoctrines: number;
  supersededDoctrines: number;
  lineageDepth: number;
  evidence: string[];
}

export async function trackDoctrineEvolution(workspaceId: string): Promise<DoctrineEvolutionResult> {
  const evidence: string[] = [];

  const doctrines = await prisma.operationalDoctrine.findMany({
    where: { workspaceId },
    orderBy: { version: "desc" }
  });

  const activeDoctrines = doctrines.filter(d => !d.supersedesId).length;
  const supersededDoctrines = doctrines.filter(d => d.supersedesId).length;
  
  // Calculate average lineage depth
  let lineageDepth = 1.0;
  if (doctrines.length > 0) {
    const versions = doctrines.map(d => d.version);
    lineageDepth = Math.max(...versions);
    evidence.push(`Maximum doctrine lineage depth reaches version ${lineageDepth}.`);
  } else {
    evidence.push("No operational doctrines currently registered in organizational memory.");
  }

  if (supersededDoctrines > 0) {
    evidence.push(`${supersededDoctrines} obsolete doctrines have been mathematically superseded by superior adaptations.`);
  }

  return {
    activeDoctrines,
    supersededDoctrines,
    lineageDepth,
    evidence
  };
}
