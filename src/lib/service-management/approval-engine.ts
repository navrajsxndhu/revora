import { prisma } from "@/lib/prisma";

export async function determineMandatoryApprovals(workspaceId: string, requestPayload: any) {
  // Determines mandatory approvals deterministically
  return [
    { role: "Platform Engineering", status: "PENDING" },
    { role: "Security", status: "PENDING" },
    { role: "Service Owner", status: "PENDING" }
  ];
}
