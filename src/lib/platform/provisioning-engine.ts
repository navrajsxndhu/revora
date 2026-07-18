import { prisma } from "@/lib/prisma";

export async function processProvisioningRequest(workspaceId: string, payload: any) {
  return await prisma.provisioningRequest.create({
    data: {
      workspaceId,
      requester: payload.requester,
      requestType: payload.requestType,
      approvalStatus: "PENDING",
      executionStatus: "NOT_STARTED"
    }
  });
}
