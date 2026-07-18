import { prisma } from "@/lib/prisma";

export const ReleaseIndexEngine = {
  getIndex: async (workspaceId: string) => {
    return prisma.releaseIndex.findMany({ where: { workspaceId } });
  }
};
