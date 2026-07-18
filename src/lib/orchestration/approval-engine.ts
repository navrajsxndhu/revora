import { prisma } from "@/lib/prisma";

export const ApprovalEngine = {
  getApprovals: async (workspaceId: string) => {
    return prisma.executionApproval.findMany({
      where: { workspaceId }
    });
  }
};
