import { prisma } from "../prisma";
import { publishFederatedEvent } from "./federation-engine";

export async function evaluateGlobalFreezeConsensus(workspaceId: string, serviceName: string) {
  // In a real distributed system, this would poll peers.
  // For the OS prototype, we evaluate local governance and publish a consensus event.
  const gov = await prisma.serviceGovernance.findUnique({
    where: { workspaceId_serviceName: { workspaceId, serviceName } }
  });

  if (gov?.deploymentFreezeActive) {
    await publishFederatedEvent(workspaceId, "us-east-1", "GLOBAL_FREEZE_CONSENSUS", {
      serviceName,
      status: "FROZEN",
      reason: gov.freezeReason
    });
    return true;
  }
  return false;
}
