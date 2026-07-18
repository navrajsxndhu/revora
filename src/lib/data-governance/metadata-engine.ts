import { prisma } from "@/lib/prisma";

export const MetadataEngine = {
  getDatasets: async (workspaceId: string) => {
    return prisma.enterpriseDataset.findMany({ where: { workspaceId } });
  },
  getCatalog: async (workspaceId: string) => {
    return prisma.metadataCatalog.findMany({ where: { workspaceId } });
  }
};
