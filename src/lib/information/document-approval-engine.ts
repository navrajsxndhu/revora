import { prisma } from "@/lib/prisma";

export const DocumentApprovalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
