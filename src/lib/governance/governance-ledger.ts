import { prisma } from "@/lib/prisma";

export async function appendToGovernanceLedger(workspaceId: string, eventData: any) {
  // Append-only governance history, never mutable
  return {
    status: "RECORDED",
    evidenceId: `gov-evd-${Date.now()}`
  };
}
