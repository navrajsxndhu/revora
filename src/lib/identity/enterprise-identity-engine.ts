import { prisma } from "@/lib/prisma";

export const IdentityEngine = {
  getIdentities: async (workspaceId: string) => {
    return prisma.enterpriseIdentity.findMany({
      where: { workspaceId }
    });
  },

  getIdentity: async (workspaceId: string, id: string) => {
    return prisma.enterpriseIdentity.findFirst({
      where: { workspaceId, id }
    });
  }
};
