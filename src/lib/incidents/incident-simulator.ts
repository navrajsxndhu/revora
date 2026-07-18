import { prisma } from "@/lib/prisma";

export async function simulateIncident(workspaceId: string, scenario: string) {
  // Allows operators to preemptively trigger mock scenarios
  return { simulated: true, scenario, impactsGenerated: 14 };
}
