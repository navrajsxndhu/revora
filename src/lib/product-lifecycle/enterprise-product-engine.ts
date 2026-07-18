import { prisma } from "@/lib/prisma";

export const EnterpriseProductEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
