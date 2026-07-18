import { prisma } from "@/lib/prisma";

export const EnterpriseAiEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
