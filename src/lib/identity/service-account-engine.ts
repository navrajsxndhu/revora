import { prisma } from "@/lib/prisma";

export const ServiceAccountEngine = {
  getAccounts: async (workspaceId: string) => {
    return prisma.serviceAccount.findMany({
      where: { workspaceId }
    });
  }
};
