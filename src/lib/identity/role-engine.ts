import { prisma } from "@/lib/prisma";

export const RoleEngine = {
  getRoles: async (workspaceId: string) => {
    return prisma.enterpriseRole.findMany({
      where: { workspaceId }
    });
  },

  getRole: async (workspaceId: string, id: string) => {
    return prisma.enterpriseRole.findFirst({
      where: { workspaceId, id }
    });
  }
};
