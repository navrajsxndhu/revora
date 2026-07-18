import { prisma } from "@/lib/prisma";

export const EnterpriseArchitectureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
