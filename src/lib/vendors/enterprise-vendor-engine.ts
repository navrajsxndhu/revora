import { prisma } from "@/lib/prisma";

export const EnterpriseVendorEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
