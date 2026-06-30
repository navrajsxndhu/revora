import { prisma } from "../prisma";
import { publishFederatedEvent } from "../network/federation-engine";

export async function recordPulse(workspaceId: string, region: string, latencyMs: number, activeQueues: number, federationLagMs: number) {
  const pulse = await prisma.infrastructurePulse.create({
    data: {
      workspaceId,
      region,
      latencyMs,
      activeQueues,
      federationLagMs
    }
  });

  // Pulse stream is continuous, so we broadcast lightly
  await publishFederatedEvent(workspaceId, region, "INFRASTRUCTURE_PULSE", {
    latencyMs, activeQueues, federationLagMs
  });

  return pulse;
}
