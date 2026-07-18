import { prisma } from "@/lib/prisma";

export const ReferenceDataEngine = {
  getEntities: async (workspaceId: string) => {
    return prisma.referenceDataEntity.findMany({ where: { workspaceId } });
  }
};
