import { prisma } from "@/lib/prisma";

export type CoordinationClass = "LOCAL" | "SYNCHRONIZED" | "ORGANIZATIONAL" | "FEDERATED" | "OPERATIONAL_COORDINATION_CIVILIZATION";

export interface CoordinationIndexResult {
  coordinationScore: number;
  coordinationClass: CoordinationClass;
  coordinationMaturity: string;
}

export async function calculateCoordinationIndex(workspaceId: string): Promise<CoordinationIndexResult> {
  const totalEvents = await prisma.operationalCoordination.count({
    where: { workspaceId }
  });

  let score = 0;

  if (totalEvents > 25) {
    score = 91;
  } else if (totalEvents > 10) {
    score = 72;
  } else if (totalEvents > 3) {
    score = 45;
  } else if (totalEvents > 0) {
    score = 20;
  } else {
    score = 5;
  }

  let coordinationClass: CoordinationClass = "LOCAL";
  let maturity = "UNDEFINED";

  if (score >= 90) {
    coordinationClass = "OPERATIONAL_COORDINATION_CIVILIZATION";
    maturity = "MATHEMATICALLY_SYNCHRONIZED";
  } else if (score >= 70) {
    coordinationClass = "FEDERATED";
    maturity = "CROSS_DOMAIN_COORDINATION";
  } else if (score >= 40) {
    coordinationClass = "ORGANIZATIONAL";
    maturity = "CENTRALIZED_SCHEDULING";
  } else if (score >= 15) {
    coordinationClass = "SYNCHRONIZED";
    maturity = "RESOURCE_AWARE";
  } else {
    coordinationClass = "LOCAL";
    maturity = "ISOLATED_EXECUTION";
  }

  return {
    coordinationScore: score,
    coordinationClass,
    coordinationMaturity: maturity
  };
}
