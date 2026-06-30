import { prisma } from "../prisma";
import { publishFederatedEvent } from "./federation-engine";

export async function runChaosSimulation(workspaceId: string, scenario: string, targetRegion?: string, targetService?: string) {
  const sim = await prisma.chaosSimulation.create({
    data: {
      workspaceId,
      scenario,
      targetRegion,
      targetService,
      status: "RUNNING"
    }
  });

  // Mock simulation logic
  const result = `Simulated ${scenario}. Detected downstream cascading failure across 3 nodes. Rollback coordinator successfully halted mock rollout in 4s.`;

  await prisma.chaosSimulation.update({
    where: { id: sim.id },
    data: { status: "COMPLETED", result }
  });

  await publishFederatedEvent(workspaceId, "us-east-1", "CHAOS_TEST_COMPLETED", {
    scenario,
    result
  });

  return sim;
}
