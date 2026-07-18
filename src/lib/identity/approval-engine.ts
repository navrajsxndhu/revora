import { prisma } from "@/lib/prisma";

export const ApprovalEngine = {
  getApprovals: async (workspaceId: string) => {
    return prisma.accessRequest.findMany({
      where: { workspaceId }
    });
  },

  getApproval: async (workspaceId: string, id: string) => {
    return prisma.accessRequest.findFirst({
      where: { workspaceId, id }
    });
  }
};
