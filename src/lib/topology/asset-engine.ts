import { prisma } from "@/lib/prisma";

export const AssetEngine = {
  getAssets: async (workspaceId: string) => {
    return prisma.enterpriseAsset.findMany({
      where: { workspaceId },
      
    });
  }
};
