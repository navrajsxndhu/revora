import { prisma } from "@/lib/prisma";

export const PermissionEngine = {
  getPermissions: async (workspaceId: string) => {
    return prisma.permission.findMany({
      where: { workspaceId }
    });
  }
};
