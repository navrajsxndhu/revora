import { prisma } from "@/lib/prisma";

export async function processWorkflowTrigger(workspaceId: string, eventType: string, payload: any) {
  // Validate if trigger is allowed
  const validTriggers = [
    "RELEASE_APPROVED",
    "INCIDENT_CREATED",
    "CHANGE_APPROVED",
    "SECURITY_FINDING",
    "ERROR_BUDGET_EXHAUSTED",
    "PLATFORM_PROVISIONED",
    "MANUAL_APPROVAL",
    "SCHEDULED_MAINTENANCE"
  ];

  if (!validTriggers.includes(eventType)) {
    throw new Error(`Invalid trigger type: ${eventType}`);
  }

  return { status: "ACCEPTED", triggerId: `trg-${Date.now()}` };
}
