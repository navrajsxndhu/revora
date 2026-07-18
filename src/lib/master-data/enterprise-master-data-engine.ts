import { prisma } from "@/lib/prisma";

export const EnterpriseMasterDataEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
