import { prisma } from "@/lib/prisma";

export const OwnershipEngine = {
  getOwners: async (workspaceId: string) => {
    return prisma.dataOwner.findMany({ where: { workspaceId } });
  }
};
