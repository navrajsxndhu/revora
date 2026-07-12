import { prisma } from "@/lib/prisma";

export type IntegrationClass = "CONNECTED" | "SYNCHRONIZED" | "GOVERNED" | "ENTERPRISE" | "OPERATIONAL_INTEGRATION_CIVILIZATION";

export interface IntegrationIndexResult {
  connectorCoverage: number;
  synchronizationQuality: number;
  integrationClass: IntegrationClass;
}

export async function calculateIntegrationIndex(workspaceId: string): Promise<IntegrationIndexResult> {
  const connectorCount = await prisma.integrationConnector.count({
    where: { workspaceId, status: "ACTIVE" }
  });

  const eventCount = await prisma.integrationEvent.count({
    where: { workspaceId }
  });

  let coverage = 0;
  if (connectorCount >= 4) coverage = 100;
  else if (connectorCount >= 2) coverage = 60;
  else if (connectorCount === 1) coverage = 25;

  let quality = 0;
  if (eventCount > 100) quality = 98;
  else if (eventCount > 50) quality = 85;
  else if (eventCount > 10) quality = 45;
  else if (eventCount > 0) quality = 15;

  let intClass: IntegrationClass = "CONNECTED";
  const composite = (coverage + quality) / 2;

  if (composite >= 90) intClass = "OPERATIONAL_INTEGRATION_CIVILIZATION";
  else if (composite >= 75) intClass = "ENTERPRISE";
  else if (composite >= 50) intClass = "GOVERNED";
  else if (composite >= 25) intClass = "SYNCHRONIZED";

  return {
    connectorCoverage: coverage,
    synchronizationQuality: quality,
    integrationClass: intClass
  };
}
