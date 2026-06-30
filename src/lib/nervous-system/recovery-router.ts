import { prisma } from "../prisma";
import { publishFederatedEvent } from "../network/federation-engine";

export async function routeRecoveryExecution(workspaceId: string, incidentId: string, failedRegion: string) {
  // If a region drops, we migrate the active recovery execution to the nearest healthy region
  const nextHealthyRegion = failedRegion === "us-east-1" ? "eu-west-1" : "us-east-1";

  await publishFederatedEvent(workspaceId, nextHealthyRegion, "ORCHESTRATION_HANDOVER_ACCEPTED", {
    incidentId,
    previousRegion: failedRegion
  });

  return nextHealthyRegion;
}
