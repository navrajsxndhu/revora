import { prisma } from "@/lib/prisma";

export const EnterpriseProcessEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
