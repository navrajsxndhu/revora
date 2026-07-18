import { prisma } from "@/lib/prisma";

export const CloudResourceEngine = {
  getAccounts: async (workspaceId: string) => {
    return prisma.cloudAccount.findMany({
      where: { workspaceId }
    });
  }
};
