import { prisma } from "@/lib/prisma";

export interface DecisionContextSnapshot {
  activeRisks: number;
  availableCapacity: number;
  constitutionalConstraints: string[];
  operationalConstraints: string[];
}

export async function constructDecisionContext(workspaceId: string): Promise<DecisionContextSnapshot> {
  const activeRisks = 0; // Simplified for deterministic extraction
  const constitutionalConstraints: string[] = [];
  const operationalConstraints: string[] = [];

  const recentIncidents = await prisma.incident.findMany({
    where: { workspaceId, state: { not: "RESOLVED" } }
  });

  if (recentIncidents.length > 0) {
    constitutionalConstraints.push("No aggressive rollouts permitted during active unresolved incidents.");
    operationalConstraints.push(`System is currently managing ${recentIncidents.length} active incidents.`);
  }

  const knowledge = await prisma.operationalKnowledge.findFirst({
    where: { workspaceId },
    orderBy: { createdAt: "desc" }
  });

  if (knowledge && knowledge.evidenceScore > 80) {
    operationalConstraints.push("Institutional memory graph indicates high maturity; conservative scaling authorized.");
  } else {
    operationalConstraints.push("Knowledge extraction density is low; conservative decision bounds enforced.");
  }

  return {
    activeRisks: recentIncidents.length,
    availableCapacity: 100 - (recentIncidents.length * 15),
    constitutionalConstraints,
    operationalConstraints
  };
}
