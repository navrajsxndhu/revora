import { prisma } from "@/lib/prisma";

export const MetadataIndex = {
  getIndex: async (workspaceId: string) => {
    return prisma.metadataIndex.findMany({ where: { workspaceId } });
  }
};
