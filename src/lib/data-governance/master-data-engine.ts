import { prisma } from "@/lib/prisma";

export const MasterDataEngine = {
  getEntities: async (workspaceId: string) => {
    return prisma.masterDataEntity.findMany({ where: { workspaceId } });
  }
};
