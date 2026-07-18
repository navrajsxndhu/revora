import { prisma } from "@/lib/prisma";

export const EnterpriseCustomerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
