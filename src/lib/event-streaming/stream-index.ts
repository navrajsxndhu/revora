import { prisma } from "@/lib/prisma";

export const StreamIndex = {
  getIndex: async (workspaceId: string) => {
    return prisma.streamingIndex.findMany({ where: { workspaceId } });
  }
};
