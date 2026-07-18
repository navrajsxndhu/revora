import { prisma } from "@/lib/prisma";

export const MetadataLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.metadataLedger.findMany({ where: { workspaceId } });
  }
};
