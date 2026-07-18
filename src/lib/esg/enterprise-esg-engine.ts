import { prisma } from "@/lib/prisma";

export const EnterpriseEsgEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
